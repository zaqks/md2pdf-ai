<script setup>
import { ref, watch, onMounted } from 'vue';
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

function updatePreview() {
  previewHtml.value = marked.parse(props.markdown);
}

onMounted(() => {
  updatePreview();
});

watch(() => props.markdown, () => {
  updatePreview();
});
</script>

<template>
  <div class="markdown-body" v-html="previewHtml"></div>
</template>

<style scoped>
.markdown-body {
  background-color: white;
  overflow-x: visible;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

.markdown-body table {
  display: block;
  width: 100% !important;
  overflow-x: visible !important;
  word-wrap: break-word;
}

.markdown-body pre {
  overflow-x: visible !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
}

.markdown-body code {
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
}

.markdown-body pre code {
  white-space: pre-wrap !important;
}

@media print {
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