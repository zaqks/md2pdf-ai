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

const emit = defineEmits(['update:modelValue']);

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
</script>

<template>
  <textarea ref="editorElement"></textarea>
</template>

<style>
.CodeMirror {
  height: 100% !important;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
}

.CodeMirror-scroll {
  will-change: scroll-position;
}
</style>