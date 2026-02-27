<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { ListPlus, Table2, ImagePlus, FileUp, FileDown } from 'lucide-vue-next';
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

const markdown = ref('# Hello World !');
const isDragging = ref(false);
const editorContainerRef = ref(null);
const previewContainerRef = ref(null);
const editorRef = ref(null);
const currentFileName = ref('');
const files = ref([]);

// Autosave interval (save every 2 seconds)
let autosaveInterval = null;

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
  
  // If we deleted the current file, create a new one
  if (fileName === currentFileName.value) {
    createNewFile();
  } else {
    refreshFileList();
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

function handleAiSubmit(query) {
  // TODO: Integrate with AI service
  console.log('AI Query:', query);
  // For now, just append the query to markdown as a placeholder
  markdown.value += `\n\n<!-- AI Query: ${query} -->\n`;
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
  
  if (previewContainerRef.value) {
    previewContainerRef.value.addEventListener('scroll', onPreviewScroll, { passive: true });
  }
});

onBeforeUnmount(() => {
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
    <aside class="sidebar">
      <div class="logo">
        <span class="logo-text">md2pdf</span>
      </div>
      
      <FileBrowser
        :files="files"
        :current-file-name="currentFileName"
        @select="selectFile"
        @delete="handleDeleteFile"
        @create="createNewFile"
      />
      
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
      
      <div class="main-container" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
        <div ref="editorContainerRef" class="editor-container">
          <Editor ref="editorRef" v-model="markdown" @scroll="onEditorScroll" />
        </div>
        <div class="drag-bar" :class="{ dragging: isDragging }" @mousedown="startDrag"></div>
        <div ref="previewContainerRef" class="preview-container">
          <Preview :markdown="markdown" />
        </div>
      </div>
    </div>
    
    <AiAssistant @submit="handleAiSubmit" />
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
  position: relative;
  background-color: var(--color-background);
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
  .content-area > *:not(.main-container) {
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
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacing-m);
  }

  .sidebar:hover {
    width: 100%;
  }

  .logo {
    margin-bottom: var(--spacing-m);
  }

  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    margin-top: var(--spacing-m);
  }

  .button-text {
    opacity: 1;
  }

  .content-area {
    margin-left: 0;
  }

  .main-container {
    flex-direction: column;
  }

  #app {
    flex-direction: column;
  }
}
</style>