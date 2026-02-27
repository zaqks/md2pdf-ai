<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { ListPlus, Table2, ImagePlus, FileUp, FileDown, Menu } from 'lucide-vue-next';
import Editor from '../components/Editor.vue';
import Preview from '../components/Editor/Preview.vue';
import AiAssistant from '../components/AiAssistant.vue';
import AppBar from '../components/AppBar.vue';
import FileBrowser from '../components/FileBrowser.vue';
import {
  initializeNewFile,
  getFile,
  saveFile,
  deleteFile,
  renameFile,
  getCurrentFileName,
  setCurrentFileName,
  getFileList
} from '../utils/storage.js';
import { useAiAssistant } from '../composables/useAiAssistant.js';

const markdown = ref('# Hello World !');
const isDragging = ref(false);
const editorContainerRef = ref(null);
const previewContainerRef = ref(null);
const editorRef = ref(null);
const currentFileName = ref('');
const files = ref([]);
const isMobileMenuOpen = ref(false);
const activeTab = ref('editor'); // 'editor' or 'preview'

// AI Assistant
const {
  status: aiStatus,
  isProcessing: aiProcessing,
  error: aiError,
  connect: connectAi,
  disconnect: disconnectAi,
  askAi,
  undo: undoAi,
  canUndo: canUndoAi
} = useAiAssistant();

// Autosave interval (save every 2 seconds)
let autosaveInterval = null;

// Track scrolling state to prevent infinite loops
let isScrollingEditor = false;
let isScrollingPreview = false;
let editorScrollTimeout = null;
let previewScrollTimeout = null;

// Load or initialize file on mount
function loadFile() {
  const savedFileName = getCurrentFileName();
  let fileName, content;

  if (savedFileName) {
    const fileData = getFile(savedFileName);
    if (fileData) {
      fileName = savedFileName;
      content = fileData.content;
    } else {
      // File was deleted or doesn't exist
      const newFile = initializeNewFile();
      fileName = newFile.fileName;
      content = newFile.content;
    }
  } else {
    // No current file, create new one
    const newFile = initializeNewFile();
    fileName = newFile.fileName;
    content = newFile.content;
  }

  currentFileName.value = fileName;
  markdown.value = content;
  refreshFileList();
}

// Refresh file list
function refreshFileList() {
  files.value = getFileList();
}

// Autosave function
function autoSave() {
  if (currentFileName.value) {
    saveFile(currentFileName.value, markdown.value);
    refreshFileList();
  }
}

// Watch markdown changes and trigger autosave
watch(markdown, () => {
  autoSave();
});

// Select a file
function selectFile(fileName) {
  const fileData = getFile(fileName);
  if (fileData) {
    currentFileName.value = fileName;
    markdown.value = fileData.content;
    setCurrentFileName(fileName);
  }
}

// Create new file
function createNewFile() {
  const newFile = initializeNewFile();
  currentFileName.value = newFile.fileName;
  markdown.value = newFile.content;
  refreshFileList();
}

// Delete file
function handleDeleteFile(fileName) {
  deleteFile(fileName);
  refreshFileList();

  // If we deleted the current file, switch to another file or create new one
  if (fileName === currentFileName.value) {
    // Check if there are any remaining files
    if (files.value.length > 0) {
      // Open the most recently modified file
      selectFile(files.value[0].name);
    } else {
      // No files left, create a new one
      createNewFile();
    }
  }
}

// Rename file
function handleRenameFile(newName) {
  if (newName !== currentFileName.value) {
    if (renameFile(currentFileName.value, newName)) {
      currentFileName.value = newName;
      setCurrentFileName(newName);
      refreshFileList();
    } else {
      alert('File name already exists or invalid');
    }
  }
}

function insertTableOfContents() {
  const lines = markdown.value.split('\n');
  const headings = [];

  lines.forEach((line) => {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const anchor = text.toLowerCase().trim().replace(/\s+/g, '-');
      headings.push({ level, text, anchor });
    }
  });

  if (headings.length === 0) {
    alert('No headings found in the document. Add some headings (# Heading) first!');
    return;
  }

  let toc = '\n## Table of Contents\n\n';
  headings.forEach(heading => {
    const indent = '  '.repeat(heading.level - 1);
    toc += `${indent}- [${heading.text}](#${heading.anchor})\n`;
  });
  toc += '\n';

  markdown.value += toc;
}

function insertTable() {
  const rows = prompt('Enter number of rows:', '3');
  const cols = prompt('Enter number of columns:', '3');

  if (!rows || !cols || isNaN(rows) || isNaN(cols)) return;

  const numRows = parseInt(rows);
  const numCols = parseInt(cols);

  if (numRows < 1 || numCols < 1 || numRows > 100 || numCols > 100) {
    alert('Please enter valid numbers between 1 and 100');
    return;
  }

  let table = '\n';
  table += '| ' + Array(numCols).fill('Header').map((h, i) => h + ' ' + (i + 1)).join(' | ') + ' |\n';
  table += '| ' + Array(numCols).fill('---').join(' | ') + ' |\n';

  for (let i = 0; i < numRows - 1; i++) {
    table += '| ' + Array(numCols).fill('Cell').join(' | ') + ' |\n';
  }
  table += '\n';

  markdown.value += table;
}

function insertImage() {
  const url = prompt('Enter image URL:', 'https://');
  if (!url) return;

  const alt = prompt('Enter image description (alt text):', 'Image');
  const imageHTML = `\n<img src="${url}" alt="${alt || 'Image'}" />\n`;

  markdown.value += imageHTML;
}

function uploadFile(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Append content instead of replacing
      const newContent = e.target.result;
      markdown.value = markdown.value ? markdown.value + '\n\n' + newContent : newContent;
    };
    reader.readAsText(file);
  }
}

function transformToPDF() {
  window.print();
}

async function handleAiSubmit(query) {
  try {
    const response = await askAi(query, markdown.value);
    // Override current content with AI response
    markdown.value = response;
    // Force editor to refresh layout after content update
    setTimeout(() => {
      if (editorRef.value) {
        editorRef.value.refresh();
      }
    }, 100);
  } catch (error) {
    console.error('AI Error:', error);
    alert(`AI Error: ${error.message}`);
  }
}

function handleAiUndo() {
  const previousContent = undoAi();
  if (previousContent !== null) {
    markdown.value = previousContent;
    // Force editor to refresh layout after undo
    setTimeout(() => {
      if (editorRef.value) {
        editorRef.value.refresh();
      }
    }, 100);
  }
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

function switchTab(tab) {
  activeTab.value = tab;
}



// Handle editor scroll - sync to preview
function onEditorScroll(scrollPercentage) {
  if (isScrollingPreview || !previewContainerRef.value) return;

  isScrollingEditor = true;

  if (editorScrollTimeout) {
    clearTimeout(editorScrollTimeout);
  }

  requestAnimationFrame(() => {
    if (previewContainerRef.value && isFinite(scrollPercentage)) {
      const previewScrollHeight = previewContainerRef.value.scrollHeight - previewContainerRef.value.clientHeight;
      previewContainerRef.value.scrollTop = scrollPercentage * previewScrollHeight;
    }
  });

  editorScrollTimeout = setTimeout(() => {
    isScrollingEditor = false;
  }, 150);
}

// Handle preview scroll - sync to editor
function onPreviewScroll() {
  if (isScrollingEditor || !previewContainerRef.value || !editorRef.value) return;

  isScrollingPreview = true;

  if (previewScrollTimeout) {
    clearTimeout(previewScrollTimeout);
  }

  requestAnimationFrame(() => {
    if (!previewContainerRef.value) return;

    const scrollPercentage = previewContainerRef.value.scrollTop /
      (previewContainerRef.value.scrollHeight - previewContainerRef.value.clientHeight);

    if (isFinite(scrollPercentage) && editorRef.value) {
      editorRef.value.scrollTo(scrollPercentage);
    }
  });

  previewScrollTimeout = setTimeout(() => {
    isScrollingPreview = false;
  }, 150);
}

// Resize functionality
function startDrag(event) {
  isDragging.value = true;
  event.preventDefault();
}

function onDrag(event) {
  if (!isDragging.value || !editorContainerRef.value) return;

  const container = event.currentTarget;
  const containerRect = container.getBoundingClientRect();
  const newWidth = event.clientX - containerRect.left;
  const minWidth = 200;
  const maxWidth = containerRect.width - 200;

  if (newWidth >= minWidth && newWidth <= maxWidth) {
    editorContainerRef.value.style.flex = `0 0 ${newWidth}px`;
  }
}

function stopDrag() {
  isDragging.value = false;
}

// Setup preview scroll listener
onMounted(() => {
  loadFile();
  connectAi(); // Connect to AI WebSocket

  if (previewContainerRef.value) {
    previewContainerRef.value.addEventListener('scroll', onPreviewScroll, { passive: true });
  }
});

onBeforeUnmount(() => {
  disconnectAi(); // Disconnect AI WebSocket

  if (previewContainerRef.value) {
    previewContainerRef.value.removeEventListener('scroll', onPreviewScroll);
  }
  if (editorScrollTimeout) {
    clearTimeout(editorScrollTimeout);
  }
  if (previewScrollTimeout) {
    clearTimeout(previewScrollTimeout);
  }
});

</script>

<template>
  <div id="app">
    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ hidden: isMobileMenuOpen }">
      <Menu :size="24" />
    </button>

    <!-- Mobile Overlay -->
    <div v-if="isMobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>

    <aside class="sidebar" :class="{ 'mobile-open': isMobileMenuOpen }">
      <div class="logo">
        <span class="logo-text">md2pdf-AI</span>
      </div>

      <FileBrowser :files="files" :current-file-name="currentFileName" @select="(name) => { selectFile(name); closeMobileMenu(); }" @delete="handleDeleteFile"
        @create="() => { createNewFile(); closeMobileMenu(); }" />

      <nav class="menu">
        <button class="button outline" @click="insertTableOfContents" title="Add Table of Contents">
          <ListPlus :size="20" />
          <span class="button-text">Contents</span>
        </button>
        <button class="button outline" @click="insertTable" title="Add Table">
          <Table2 :size="20" />
          <span class="button-text">Table</span>
        </button>
        <button class="button outline" @click="insertImage" title="Add Image">
          <ImagePlus :size="20" />
          <span class="button-text">Image</span>
        </button>
        <button class="button outline" @click="$refs.fileInput.click()" title="Import File">
          <FileUp :size="20" />
          <span class="button-text">Import</span>
        </button>
        <input ref="fileInput" type="file" accept=".md,.markdown,.txt" @change="uploadFile" style="display: none">
        <button class="button filled" @click="transformToPDF" title="Export to PDF">
          <FileDown :size="20" />
          <span class="button-text">Export</span>
        </button>
      </nav>
    </aside>

    <div class="content-area">
      <AppBar :file-name="currentFileName" @rename="handleRenameFile" />

      <!-- Mobile Tab Switcher -->
      <div class="mobile-tabs">
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'editor' }"
          @click="switchTab('editor')"
        >
          Editor
        </button>
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'preview' }"
          @click="switchTab('preview')"
        >
          Preview
        </button>
      </div>

      <div class="main-container" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
        <div ref="editorContainerRef" class="editor-container" :class="{ 'mobile-hidden': activeTab !== 'editor' }">
          <Editor ref="editorRef" v-model="markdown" @scroll="onEditorScroll" />
        </div>
        <div class="drag-bar" :class="{ dragging: isDragging }" @mousedown="startDrag"></div>
        <div ref="previewContainerRef" class="preview-container" :class="{ 'mobile-hidden': activeTab !== 'preview' }">
          <Preview :markdown="markdown" />
        </div>
      </div>
    </div>

    <AiAssistant :status="aiStatus" :is-processing="aiProcessing" :can-undo="canUndoAi()" 
      :hide-on-mobile="isMobileMenuOpen" @submit="handleAiSubmit" @undo="handleAiUndo" />
  </div>
</template>

<style scoped>
/* Clean design system */
#app {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: var(--color-background);
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-l) 0;
  width: 70px;
  transition: width 0.3s ease;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;
}

.sidebar:hover {
  width: 280px;
}

.logo {
  padding: 0 var(--spacing-l);
  margin-bottom: var(--spacing-l);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidebar:hover .logo {
  opacity: 1;
}

/* Hide file browser when collapsed */
.sidebar :deep(.file-browser) {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.sidebar:hover :deep(.file-browser) {
  opacity: 1;
  pointer-events: auto;
}

.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 600;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.menu {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  padding: 0 var(--spacing-s);
  margin-top: auto;
  padding-top: var(--spacing-l);
  border-top: 1px solid var(--color-border);
}

.button {
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-radius: var(--spacing-s);
  cursor: pointer;
  font-size: var(--font-size-s);
  font-weight: 500;
  transition: var(--transition);
  font-family: var(--font-family);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  justify-content: center;
}

.sidebar:hover .button {
  justify-content: flex-start;
  gap: var(--spacing-m);
}

.button svg {
  flex-shrink: 0;
}

.button-text {
  opacity: 0;
  width: 0;
  transition: opacity 0.3s ease, width 0.3s ease;
  overflow: hidden;
}

.sidebar:hover .button-text {
  opacity: 1;
  width: auto;
}

.button:active {
  transform: translateY(0);
}

/* Outline buttons (most buttons) */
.button.outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.button.outline:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
  transform: translateY(-1px);
}

/* Filled button (Transform only) */
.button.filled {
  background-color: var(--color-primary);
  color: var(--color-background);
  border: 2px solid var(--color-primary);
}

.button.filled:hover {
  background-color: var(--color-hover);
  border-color: var(--color-hover);
  transform: translateY(-1px);
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  transition: margin-left 0.3s ease;
}

.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
  background-color: var(--color-surface);
}

.editor-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--color-background);
  overflow: hidden;
  min-height: 0;
}

.drag-bar {
  width: 3px;
  background-color: var(--color-border);
  cursor: col-resize;
  transition: var(--transition);
  position: relative;
}

.drag-bar:hover,
.drag-bar.dragging {
  background-color: var(--color-primary);
  width: 4px;
}

.preview-container {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: var(--spacing-2xl);
  background-color: var(--color-background);
  will-change: scroll-position;
}

/* Smooth scrollbar styling */
.preview-container::-webkit-scrollbar {
  width: 8px;
}

.preview-container::-webkit-scrollbar-track {
  background: var(--color-surface);
}

.preview-container::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 4px;
}

.preview-container::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}

@media print {

  .sidebar,
  .editor-container,
  .drag-bar,
  .content-area>*:not(.main-container),
  aside,
  nav {
    display: none !important;
  }

  .content-area {
    margin-left: 0;
  }

  .preview-container {
    overflow: visible;
    padding: 0;
  }

  #app {
    display: block;
  }

  /* Hide AI Assistant chat */
  #app>*:not(.content-area) {
    display: none !important;
  }
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  position: fixed;
  top: var(--spacing-m);
  left: var(--spacing-m);
  z-index: 200;
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.mobile-menu-toggle:active {
  transform: scale(0.95);
}

.mobile-menu-toggle.hidden {
  opacity: 0;
  pointer-events: none;
}

.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
}

.mobile-tabs {
  display: none;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-xs);
  gap: var(--spacing-xs);
}

.tab-button {
  flex: 1;
  padding: var(--spacing-m);
  border: none;
  background-color: transparent;
  color: var(--color-text-secondary);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-family: var(--font-family);
  cursor: pointer;
  border-radius: var(--spacing-s);
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tab-button.active {
  background-color: var(--color-primary);
  color: var(--color-background);
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-overlay {
    display: block;
  }

  .mobile-tabs {
    display: flex;
  }

  .sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    z-index: 100;
    background-color: var(--color-background);
    border-right: 1px solid var(--color-border);
    padding: var(--spacing-l);
    transition: left 0.3s ease;
    overflow-y: auto;
  }

  .sidebar.mobile-open {
    left: 0;
  }

  .sidebar:hover {
    width: 80%;
    max-width: 320px;
  }

  .logo {
    opacity: 1;
    margin-bottom: var(--spacing-l);
    padding: 0;
  }

  .sidebar :deep(.file-browser) {
    opacity: 1;
    pointer-events: auto;
  }

  .menu {
    padding: 0 0 var(--spacing-l) 0;
  }

  .button {
    justify-content: flex-start;
    gap: var(--spacing-m);
    padding: var(--spacing-m);
  }

  .button-text {
    opacity: 1;
    width: auto;
  }

  .content-area {
    margin-left: 0;
  }

  .content-area > :deep(.app-bar) {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: var(--color-surface);
  }

  .mobile-tabs {
    position: sticky;
    top: 50px; /* Height of app-bar */
    z-index: 50;
    background-color: var(--color-surface);
  }

  .main-container {
    flex-direction: column;
  }

  .drag-bar {
    display: none;
  }

  .editor-container,
  .preview-container {
    flex: 1;
    min-height: 0;
    padding-bottom: 80px; /* Space for AI input */
  }

  .editor-container.mobile-hidden,
  .preview-container.mobile-hidden {
    display: none;
  }

  .preview-container {
    padding: var(--spacing-l);
    padding-bottom: 100px; /* Space for AI input */
  }

  #app {
    flex-direction: column;
  }
}
</style>