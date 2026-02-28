<script setup>
import { ref, watch, onMounted, nextTick, computed } from 'vue';
import { marked } from 'marked';
import hljs from 'highlight.js';

const props = defineProps({
  markdown: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['scroll']);

const previewHtml = ref('');
const previewContainer = ref(null);
const previewWrapper = ref(null);
let updateTimeout = null;

// Handle scroll events
function handleScroll() {
  if (!previewWrapper.value) return;
  
  const scrollTop = previewWrapper.value.scrollTop;
  const scrollHeight = previewWrapper.value.scrollHeight - previewWrapper.value.clientHeight;
  const scrollPercentage = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  
  emit('scroll', scrollPercentage);
}

// Check for watermark query parameter
const showWatermark = computed(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const watermarkParam = urlParams.get('watermark');
  return watermarkParam !== 'false';
});

// Configure marked with custom renderer for heading IDs
const renderer = new marked.Renderer();
const originalHeadingRenderer = renderer.heading.bind(renderer);

renderer.heading = function(text, level, raw) {
  const slug = raw.toLowerCase().trim().replace(/\s+/g, '-');
  return `<h${level} id="${slug}">${text}</h${level}>`;
};

marked.setOptions({
  renderer: renderer,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {
        console.error(err);
      }
    }
    try {
      return hljs.highlightAuto(code).value;
    } catch (err) {
      console.error(err);
    }
    return code;
  },
  breaks: true,
  gfm: true
});

// Debounced update to avoid re-rendering on every keystroke
function updatePreview() {
  // Clear any pending updates
  clearTimeout(updateTimeout);
  
  // Schedule new update after 500ms of inactivity
  updateTimeout = setTimeout(() => {
    requestAnimationFrame(() => {
      previewHtml.value = marked.parse(props.markdown);
    });
  }, 500); // Wait 500ms after typing stops
}

onMounted(() => {
  updatePreview();
});

watch(() => props.markdown, () => {
  updatePreview();
});

// Expose scrollTo method for parent to control
defineExpose({
  scrollTo: (percentage) => {
    if (previewWrapper.value && isFinite(percentage)) {
      const scrollHeight = previewWrapper.value.scrollHeight - previewWrapper.value.clientHeight;
      previewWrapper.value.scrollTop = percentage * scrollHeight;
    }
  }
});
</script>

<template>
  <div ref="previewWrapper" class="preview-wrapper" @scroll="handleScroll">
    <div ref="previewContainer" class="markdown-body" v-html="previewHtml"></div>
    <div v-if="showWatermark" class="preview-footer">
      rendered by <a href="https://github.com/zaqks/md2pdf-ai" target="_blank" rel="noopener noreferrer">https://github.com/zaqks/md2pdf-ai</a>
    </div>
  </div>
</template>

<style scoped>
.preview-wrapper {
  height: 100%;
  overflow-y: auto;
}

/* Use github-markdown-css and highlight.js for preview styling */
/* This isolates preview from the themed UI */
.markdown-body {
  background-color: white;
  padding: 20px;
  padding-bottom: 20px;
  overflow-x: visible;
  /* Performance optimizations */
  contain: layout style paint;
  will-change: contents;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.preview-footer {
  background-color: white;
  padding: 20px;
  text-align: center;
  font-size: 12px;
  color: #666;
  border-top: 1px solid #e1e4e8;
  margin-bottom: 120px; /* Add space at bottom for chatbot */
}

.preview-footer a {
  color: #0366d6;
  text-decoration: none;
}

.preview-footer a:hover {
  text-decoration: underline;
}

/* Ensure proper wrapping for tables, pre, and code */
.markdown-body :deep(table) {
  display: block;
  width: 100% !important;
  overflow-x: visible !important;
  word-wrap: break-word;
}

.markdown-body :deep(pre) {
  overflow-x: visible !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
}

.markdown-body :deep(code) {
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
}

.markdown-body :deep(pre code) {
  white-space: pre-wrap !important;
}

@media (max-width: 768px) {
  .markdown-body {
    padding: var(--spacing-m);
    font-size: 16px; /* Prevent zoom on iOS */
  }

  .markdown-body :deep(h1) {
    font-size: 1.8em;
  }

  .markdown-body :deep(h2) {
    font-size: 1.5em;
  }

  .markdown-body :deep(h3) {
    font-size: 1.3em;
  }

  .markdown-body :deep(img) {
    max-width: 100%;
    height: auto;
  }

  .markdown-body :deep(table) {
    font-size: 14px;
  }

  .markdown-body :deep(pre) {
    font-size: 14px;
    padding: var(--spacing-m);
  }
}

@media print {
  .preview-footer {
    display: block !important;
    page-break-before: avoid;
    margin-bottom: 0 !important;
  }

  .markdown-body {
    overflow: visible !important;
    padding: 20px !important;
    background-color: white !important;
    color: black !important;
    display: block !important;
    height: auto !important;
  }

  .markdown-body,
  .markdown-body * {
    overflow: visible !important;
  }

  .markdown-body table {
    display: block;
    width: 100% !important;
    overflow-x: visible !important;
  }

  .markdown-body pre,
  .markdown-body code {
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
    overflow-x: visible !important;
  }
}
</style>