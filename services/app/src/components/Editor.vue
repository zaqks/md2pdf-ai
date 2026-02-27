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
    theme: 'default',
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
    const cursor = editor.getCursor();
    editor.setValue(newValue);
    // Restore cursor position if still valid
    const lineCount = editor.lineCount();
    if (cursor.line < lineCount) {
      editor.setCursor(cursor);
    }
    // Force CodeMirror to refresh and recalculate layout
    setTimeout(() => {
      if (editor) {
        editor.refresh();
      }
    }, 0);
  }
});

onBeforeUnmount(() => {
  if (editor) {
    editor.toTextArea();
  }
});

// Expose scrollTo and refresh methods for parent to control
defineExpose({
  scrollTo: (percentage) => {
    if (editor && isFinite(percentage)) {
      const scrollInfo = editor.getScrollInfo();
      const editorScrollHeight = scrollInfo.height - scrollInfo.clientHeight;
      editor.scrollTo(null, percentage * editorScrollHeight);
    }
  },
  refresh: () => {
    if (editor) {
      editor.refresh();
    }
  }
});
</script>

<template>
  <div class="editor-wrapper">
    <textarea ref="editorElement"></textarea>
  </div>
</template>

<style>
/* Dark editor theme matching design system */
.editor-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.CodeMirror {
  height: 100% !important;
  width: 100%;
  font-size: 14px;
  line-height: 1.6;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background-color: #1a1a1a !important;
  color: #e0e0e0 !important;
  box-sizing: border-box;
}

.CodeMirror-scroll {
  will-change: scroll-position;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100%;
}

.CodeMirror-gutters {
  background-color: #0f0f0f !important;
  border-right: 1px solid #2a2a2a !important;
  padding: 0 3px 0 0;
  min-width: 45px;
}

.CodeMirror-linenumber {
  color: #757575 !important;
  padding: 0 8px;
  text-align: right;
  min-width: 35px;
}

.CodeMirror-cursor {
  border-left: 2px solid #ffffff !important;
}

.CodeMirror-selected {
  background-color: rgba(117, 117, 117, 0.2) !important;
}

.CodeMirror-line::selection,
.CodeMirror-line > span::selection,
.CodeMirror-line > span > span::selection {
  background-color: rgba(117, 117, 117, 0.3);
}

/* Syntax highlighting matching theme */
.cm-header {
  color: #ffffff !important;
  font-weight: 600 !important;
}

.cm-quote {
  color: #9e9e9e !important;
  font-style: italic;
}

.cm-link {
  color: #e0e0e0 !important;
  text-decoration: underline;
}

.cm-strong {
  font-weight: 600 !important;
  color: #ffffff !important;
}

.cm-em {
  font-style: italic;
  color: #bdbdbd !important;
}

.cm-comment {
  color: #757575 !important;
}
</style>