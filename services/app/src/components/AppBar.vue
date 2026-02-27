<script setup>
import { ref, watch } from 'vue';
import { Check, X, Pencil } from 'lucide-vue-next';

const props = defineProps({
  fileName: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['rename']);

const isEditing = ref(false);
const editedName = ref(props.fileName);

watch(() => props.fileName, (newName) => {
  editedName.value = newName;
  isEditing.value = false;
});

function startEditing() {
  isEditing.value = true;
  editedName.value = props.fileName;
}

function confirmRename() {
  if (editedName.value.trim() && editedName.value !== props.fileName) {
    emit('rename', editedName.value.trim());
  }
  isEditing.value = false;
}

function cancelRename() {
  editedName.value = props.fileName;
  isEditing.value = false;
}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    confirmRename();
  } else if (event.key === 'Escape') {
    cancelRename();
  }
}
</script>

<template>
  <div class="app-bar">
    <div class="file-name-container">
      <input
        v-if="isEditing"
        v-model="editedName"
        @keydown="handleKeydown"
        @blur="cancelRename"
        class="file-name-input"
        type="text"
        autofocus
      />
      <span v-else class="file-name">{{ fileName }}</span>
      
      <div v-if="isEditing" class="edit-actions">
        <button @mousedown.prevent="confirmRename" class="icon-button confirm" title="Confirm">
          <Check :size="16" />
        </button>
        <button @mousedown.prevent="cancelRename" class="icon-button cancel" title="Cancel">
          <X :size="16" />
        </button>
      </div>
      <button v-else @click="startEditing" class="icon-button edit" title="Rename">
        <Pencil :size="16" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.app-bar {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-m) var(--spacing-l);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.file-name-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
}

.file-name {
  font-size: var(--font-size-m);
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.5px;
}

.file-name-input {
  font-size: var(--font-size-m);
  font-weight: 600;
  padding: var(--spacing-s);
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  outline: none;
  min-width: 200px;
  font-family: var(--font-family);
}

.edit-actions {
  display: flex;
  gap: var(--spacing-s);
}

.icon-button {
  padding: var(--spacing-xs);
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: var(--transition);
  color: var(--color-text-secondary);
}

.icon-button:hover {
  background-color: var(--color-surface);
}

.icon-button.edit:hover {
  color: var(--color-primary);
}

.icon-button.confirm {
  color: #4caf50;
}

.icon-button.confirm:hover {
  background-color: rgba(76, 175, 80, 0.1);
}

.icon-button.cancel {
  color: #f44336;
}

.icon-button.cancel:hover {
  background-color: rgba(244, 67, 54, 0.1);
}
</style>
