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
/* Nike-inspired preview styling */
.markdown-body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  overflow-x: visible;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  font-family: var(--font-family);
  font-size: var(--font-size-m);
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
}

/* Typography - Clean Nike style */
.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4),
.markdown-body :deep(h5),
.markdown-body :deep(h6) {
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-m);
  color: var(--color-primary);
}

.markdown-body :deep(h1) {
  font-size: var(--font-size-2xl);
  text-transform: uppercase;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: var(--spacing-m);
}

.markdown-body :deep(h2) {
  font-size: var(--font-size-xl);
}

.markdown-body :deep(h3) {
  font-size: var(--font-size-l);
}

.markdown-body :deep(p) {
  margin-bottom: var(--spacing-m);
  line-height: 1.7;
}

.markdown-body :deep(a) {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid var(--color-primary);
  transition: var(--transition);
}

.markdown-body :deep(a:hover) {
  color: var(--color-hover);
  border-bottom-color: var(--color-hover);
}

.markdown-body :deep(strong) {
  font-weight: 600;
  color: var(--color-primary);
}

.markdown-body :deep(em) {
  font-style: italic;
  color: var(--color-text-secondary);
}

.markdown-body :deep(blockquote) {
  border-left: 3px solid var(--color-primary);
  padding-left: var(--spacing-l);
  margin: var(--spacing-l) 0;
  color: var(--color-text-secondary);
  font-style: italic;
}

.markdown-body :deep(code) {
  background-color: var(--color-surface);
  color: var(--color-primary);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: var(--font-size-s);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
}

.markdown-body :deep(pre) {
  background-color: var(--color-surface);
  padding: var(--spacing-l);
  border-radius: 8px;
  overflow-x: visible !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  word-break: break-word !important;
  margin: var(--spacing-l) 0;
}

.markdown-body :deep(pre code) {
  background-color: transparent;
  padding: 0;
  font-size: var(--font-size-s);
  white-space: pre-wrap !important;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  margin: var(--spacing-m) 0;
  padding-left: var(--spacing-xl);
}

.markdown-body :deep(li) {
  margin-bottom: var(--spacing-xs);
}

.markdown-body :deep(table) {
  display: block;
  width: 100% !important;
  overflow-x: visible !important;
  word-wrap: break-word;
  border-collapse: collapse;
  margin: var(--spacing-l) 0;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  border: 1px solid var(--color-border);
  padding: var(--spacing-s) var(--spacing-m);
  text-align: left;
}

.markdown-body :deep(th) {
  background-color: var(--color-primary);
  color: var(--color-background);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--font-size-s);
  letter-spacing: 0.5px;
}

.markdown-body :deep(td) {
  background-color: var(--color-background);
}

.markdown-body :deep(tr:nth-child(even) td) {
  background-color: var(--color-surface);
}

.markdown-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: var(--spacing-l) 0;
}

.markdown-body :deep(hr) {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: var(--spacing-2xl) 0;
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