<script setup>
import { ref, computed } from 'vue';
import Editor from '../components/Editor.vue';
import Preview from '../components/Editor/Preview.vue';

const markdown = ref('# Hello World !');
const editorWidth = ref(50);
const isDragging = ref(false);

const editorStyle = computed(() => ({
  flex: `0 0 ${editorWidth.value}%`
}));

const previewStyle = computed(() => ({
  flex: `0 0 ${100 - editorWidth.value}%`
}));

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
      markdown.value = e.target.result;
    };
    reader.readAsText(file);
  }
}

function transformToPDF() {
  window.print();
}

function startDrag(event) {
  isDragging.value = true;
  event.preventDefault();
}

function onDrag(event) {
  if (!isDragging.value) return;
  
  const container = event.currentTarget;
  const containerRect = container.getBoundingClientRect();
  const newWidth = ((event.clientX - containerRect.left) / containerRect.width) * 100;
  
  if (newWidth >= 20 && newWidth <= 80) {
    editorWidth.value = newWidth;
  }
}

function stopDrag() {
  isDragging.value = false;
}

</script>

<template>
  <div id="app">
    <header>
      <p class="project">md2pdf</p>
      <div class="menu">
        <button class="button" @click="insertTableOfContents">
          📑 Table of Contents
        </button>
        <button class="button" @click="insertTable">
          📊 Add Table
        </button>
        <button class="button" @click="insertImage">
          🖼️ Add Image
        </button>
        <button class="button upload" @click="$refs.fileInput.click()">
          📄 Upload .md
        </button>
        <input 
          ref="fileInput" 
          type="file" 
          accept=".md,.markdown,.txt" 
          @change="uploadFile" 
          style="display: none"
        >
        <button class="button download" @click="transformToPDF">
          🎉 Transform
        </button>
      </div>
    </header>

    <div 
      class="main-container" 
      @mousemove="onDrag" 
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <div class="editor-container" :style="editorStyle">
        <Editor v-model="markdown" />
      </div>
      <div 
        class="drag-bar" 
        :class="{ dragging: isDragging }"
        @mousedown="startDrag"
      ></div>
      <div class="preview-container" :style="previewStyle">
        <Preview :markdown="markdown" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.project {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.menu {
  display: flex;
  gap: 10px;
  align-items: center;
}

.button {
  background-color: #3498db;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #2980b9;
}

.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.editor-container {
  display: flex;
  position: relative;
}

.drag-bar {
  width: 10px;
  background-color: #ddd;
  cursor: col-resize;
  transition: background-color 0.2s;
  position: relative;
}

.drag-bar:hover,
.drag-bar.dragging {
  background-color: #3498db;
}

.preview-container {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  background-color: white;
  will-change: scroll-position;
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
</style>