<script setup>
import { computed } from 'vue';
import { File, Trash2, FilePlus } from 'lucide-vue-next';

const props = defineProps({
  files: {
    type: Array,
    required: true
  },
  currentFileName: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['select', 'delete', 'create']);

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  return date.toLocaleDateString();
}

function handleDelete(fileName, event) {
  event.stopPropagation();
  if (confirm(`Delete "${fileName}"?`)) {
    emit('delete', fileName);
  }
}
</script>

<template>
  <div class="file-browser">
    <div class="file-browser-header">
      <h3 class="browser-title">Files</h3>
      <button @click="emit('create')" class="new-file-button" title="New File">
        <FilePlus :size="18" />
      </button>
    </div>
    
    <div class="file-list">
      <div
        v-for="file in files"
        :key="file.name"
        class="file-item"
        :class="{ active: file.name === currentFileName }"
        @click="emit('select', file.name)"
      >
        <div class="file-item-content">
          <File :size="16" class="file-icon" />
          <div class="file-info">
            <span class="file-name">{{ file.name }}</span>
            <span class="file-date">{{ formatDate(file.lastModified) }}</span>
          </div>
        </div>
        <button
          @click="(e) => handleDelete(file.name, e)"
          class="delete-button"
          title="Delete"
        >
          <Trash2 :size="14" />
        </button>
      </div>
      
      <div v-if="files.length === 0" class="empty-state">
        No files yet. Create one!
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-browser {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.file-browser-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-m);
  border-bottom: 1px solid var(--color-border);
}

.browser-title {
  font-size: var(--font-size-m);
  font-weight: 600;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.new-file-button {
  padding: var(--spacing-xs);
  border: 1px solid var(--color-primary);
  background-color: transparent;
  color: var(--color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: var(--transition);
}

.new-file-button:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
}

.file-list {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-s);
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-s);
  margin-bottom: var(--spacing-xs);
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid transparent;
}

.file-item:hover {
  background-color: var(--color-surface);
  border-color: var(--color-border);
}

.file-item.active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.file-item.active .file-name,
.file-item.active .file-date,
.file-item.active .file-icon {
  color: var(--color-background);
}

.file-item-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  flex: 1;
  min-width: 0;
}

.file-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}

.file-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.file-name {
  font-size: var(--font-size-s);
  font-weight: 500;
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

.delete-button {
  padding: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: var(--transition);
  opacity: 0;
  color: var(--color-text-secondary);
}

.file-item:hover .delete-button {
  opacity: 1;
}

.delete-button:hover {
  background-color: #f44336;
  color: white;
}

.file-item.active .delete-button {
  color: var(--color-background);
  opacity: 0.7;
}

.file-item.active .delete-button:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.2);
  color: var(--color-background);
}

.empty-state {
  padding: var(--spacing-l);
  text-align: center;
  color: var(--color-text-secondary);
  font-size: var(--font-size-s);
}

.file-list::-webkit-scrollbar {
  width: 6px;
}

.file-list::-webkit-scrollbar-track {
  background: transparent;
}

.file-list::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 3px;
}

.file-list::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}

@media (max-width: 768px) {
  .file-browser-header {
    padding: var(--spacing-s);
  }

  .file-item {
    padding: var(--spacing-m);
    min-height: 56px; /* Larger touch target */
  }

  .delete-button {
    opacity: 1; /* Always visible on mobile */
    padding: var(--spacing-s);
    min-width: 36px;
    min-height: 36px;
  }

  .new-file-button {
    padding: var(--spacing-s);
    min-width: 36px;
    min-height: 36px;
  }

  .file-name {
    font-size: var(--font-size-m);
  }

  .file-date {
    font-size: var(--font-size-s);
  }
}
</style>
