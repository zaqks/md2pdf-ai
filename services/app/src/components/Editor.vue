<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/gfm/gfm.js';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'scroll']);

const editorElement = ref(null);
let editor = null;

onMounted(() => {
  editor = CodeMirror.fromTextArea(editorElement.value, {
    mode: 'gfm',
    theme: 'darcula',
    lineNumbers: true,
    lineWrapping: true
  });

  editor.setValue(props.modelValue);

  editor.on('change', () => {
    emit('update:modelValue', editor.getValue());
  });

  // Emit scroll events for synchronization
  editor.on('scroll', () => {
    const scrollInfo = editor.getScrollInfo();
    const scrollPercentage = scrollInfo.top / (scrollInfo.height - scrollInfo.clientHeight);
    emit('scroll', scrollPercentage);
  });
});

watch(() => props.modelValue, (newValue) => {
  if (editor && editor.getValue() !== newValue) {
    editor.setValue(newValue);
  }
});

onBeforeUnmount(() => {
  if (editor) {
    editor.toTextArea();
  }
});

// Expose scrollTo method for parent to control scroll
defineExpose({
  scrollTo: (percentage) => {
    if (editor && isFinite(percentage)) {
      const scrollInfo = editor.getScrollInfo();
      const editorScrollHeight = scrollInfo.height - scrollInfo.clientHeight;
      editor.scrollTo(null, percentage * editorScrollHeight);
    }
  }
});
</script>

<template>
  <textarea ref="editorElement"></textarea>
</template>

<style>
/* Nike-inspired editor styling */
.CodeMirror {
  height: 100% !important;
  width: 100%;
  font-size: var(--font-size-m);
  line-height: 1.6;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background-color: var(--color-background) !important;
  color: var(--color-text-primary) !important;
}

.CodeMirror-scroll {
  will-change: scroll-position;
  padding: var(--spacing-l);
}

.CodeMirror-gutters {
  background-color: var(--color-surface) !important;
  border-right: 1px solid var(--color-border) !important;
}

.CodeMirror-linenumber {
  color: var(--color-text-secondary) !important;
  padding: 0 var(--spacing-s);
}

.CodeMirror-cursor {
  border-left: 2px solid var(--color-primary) !important;
}

.CodeMirror-selected {
  background-color: rgba(17, 17, 17, 0.1) !important;
}

/* Override dark theme with Nike minimalist light theme */
.cm-s-darcula.CodeMirror {
  background-color: var(--color-background) !important;
  color: var(--color-text-primary) !important;
}

.cm-s-darcula .cm-header {
  color: var(--color-primary) !important;
  font-weight: 600 !important;
}

.cm-s-darcula .cm-quote {
  color: var(--color-text-secondary) !important;
  font-style: italic;
}

.cm-s-darcula .cm-link {
  color: var(--color-primary) !important;
  text-decoration: underline;
}

.cm-s-darcula .cm-strong {
  font-weight: 600 !important;
  color: var(--color-primary) !important;
}

.cm-s-darcula .cm-em {
  font-style: italic;
  color: var(--color-text-secondary) !important;
}
</style>