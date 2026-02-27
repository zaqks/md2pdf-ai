<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { FileText, Table2, Image, Upload, Sparkles, List } from 'lucide-vue-next';
import Editor from '../components/Editor.vue';
import Preview from '../components/Editor/Preview.vue';

const markdown = ref('# Hello World !');
const isDragging = ref(false);
const editorContainerRef = ref(null);
const previewContainerRef = ref(null);
const editorRef = ref(null);

// Track scrolling state to prevent infinite loops
let isScrollingEditor = false;
let isScrollingPreview = false;
let editorScrollTimeout = null;
let previewScrollTimeout = null;

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
    <header>
      <p class="project">md2pdf</p>
      <div class="menu">
        <button class="button outline" @click="insertTableOfContents">
          <List :size="18" />
          <span>Contents</span>
        </button>
        <button class="button outline" @click="insertTable">
          <Table2 :size="18" />
          <span>Table</span>
        </button>
        <button class="button outline" @click="insertImage">
          <Image :size="18" />
          <span>Image</span>
        </button>
        <button class="button outline" @click="$refs.fileInput.click()">
          <Upload :size="18" />
          <span>Import</span>
        </button>
        <input ref="fileInput" type="file" accept=".md,.markdown,.txt" @change="uploadFile" style="display: none">
        <button class="button filled" @click="transformToPDF">
          <Sparkles :size="18" />
          <span>Export</span>
        </button>
      </div>
    </header>

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
</template>

<style scoped>
/* Nike-inspired clean design */
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
}

header {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  padding: var(--spacing-l) var(--spacing-2xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
}

.project {
  font-size: var(--font-size-xl);
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 0;
  text-transform: uppercase;
}

.menu {
  display: flex;
  gap: var(--spacing-s);
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-s) var(--spacing-l);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: var(--font-size-s);
  font-weight: 500;
  transition: var(--transition);
  font-family: var(--font-family);
  letter-spacing: 0.5px;
  text-transform: uppercase;
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
  header,
  .editor-container,
  .drag-bar {
    display: none !important;
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
  header {
    flex-direction: column;
    gap: var(--spacing-m);
    padding: var(--spacing-m);
  }

  .menu {
    flex-wrap: wrap;
    justify-content: center;
  }

  .button {
    font-size: var(--font-size-xs);
    padding: var(--spacing-xs) var(--spacing-m);
  }
}
</style>