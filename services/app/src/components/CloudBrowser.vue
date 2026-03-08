<template>
  <div class="cloud-browser">
    <div class="cloud-header">
      <h3>Cloud Documents</h3>
      <button @click="$emit('close')" class="close-btn">
        <X :size="20" />
      </button>
    </div>
    
    <div class="cloud-body">
      <div v-if="loading" class="loading">Loading documents...</div>
      
      <div v-else-if="error" class="error">{{ error }}</div>
      
      <div v-else-if="documents.length === 0" class="empty">
        No cloud documents yet. Create one to get started!
      </div>
      
      <div v-else class="documents-list">
        <div
          v-for="doc in documents"
          :key="doc.id"
          class="document-item"
          @click="selectDocument(doc)"
        >
          <div class="document-info">
            <div class="document-title">
              <FileText :size="16" />
              {{ doc.title }}
            </div>
            <div class="document-meta">
              {{ formatDate(doc.updated_at || doc.created_at) }}
              <span v-if="doc.is_public" class="public-badge">
                <Globe :size="12" />
                Public
              </span>
            </div>
          </div>
          <button
            @click.stop="deleteDoc(doc)"
            class="delete-btn"
            title="Delete"
          >
            <Trash2 :size="16" />
          </button>
        </div>
      </div>
    </div>
    
    <div class="cloud-footer">
      <button @click="createNew" class="create-btn">
        <Plus :size="18" />
        <span>Create New Document</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { X, FileText, Globe, Trash2, Plus } from 'lucide-vue-next';
import { useCloudStorage } from '../composables/useCloudStorage.js';

const emit = defineEmits(['close', 'select', 'create']);

const { getDocuments, deleteDocument } = useCloudStorage();

const documents = ref([]);
const loading = ref(false);
const error = ref('');

async function loadDocuments() {
  loading.value = true;
  error.value = '';
  
  try {
    documents.value = await getDocuments();
  } catch (err) {
    error.value = 'Failed to load documents: ' + err.message;
  } finally {
    loading.value = false;
  }
}

function selectDocument(doc) {
  emit('select', doc);
}

function createNew() {
  emit('create');
}

async function deleteDoc(doc) {
  if (!confirm(`Delete "${doc.title}"?`)) {
    return;
  }
  
  try {
    await deleteDocument(doc.id);
    await loadDocuments();
  } catch (err) {
    alert('Failed to delete document: ' + err.message);
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

onMounted(() => {
  loadDocuments();
});
</script>

<style scoped>
.cloud-browser {
  background: var(--color-surface);
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-border);
}

.cloud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-l);
  border-bottom: 1px solid var(--color-border);
}

.cloud-header h3 {
  margin: 0;
  font-size: var(--font-size-l);
  color: var(--color-text-primary);
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: var(--spacing-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: var(--transition);
}

.close-btn:hover {
  background: var(--color-background);
  color: var(--color-text-primary);
}

.cloud-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-l);
}

.loading,
.error,
.empty {
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-l);
  color: var(--color-text-secondary);
  font-size: var(--font-size-m);
}

.error {
  color: var(--color-error, #dc2626);
}

.documents-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.document-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-m);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
  background: var(--color-background);
}

.document-item:hover {
  background: var(--color-surface);
  border-color: var(--color-primary);
}

.document-info {
  flex: 1;
  min-width: 0;
}

.document-title {
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  font-size: var(--font-size-m);
}

.document-meta {
  font-size: var(--font-size-s);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
}

.public-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--color-surface);
  color: var(--color-text-secondary);
  padding: 2px var(--spacing-s);
  border-radius: 4px;
  font-weight: 500;
  font-size: var(--font-size-xs);
  border: 1px solid var(--color-border);
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-s);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  border-radius: 4px;
  transition: var(--transition);
}

.delete-btn:hover {
  background: var(--color-background);
  color: var(--color-error, #dc2626);
}

.cloud-footer {
  padding: var(--spacing-l);
  border-top: 1px solid var(--color-border);
}

.create-btn {
  width: 100%;
  padding: var(--spacing-m);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: var(--font-size-m);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-s);
}

.create-btn:hover {
  background: var(--color-primary-dark);
}
</style>
