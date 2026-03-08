<template>
  <div class="cloud-browser">
    <div class="cloud-header">
      <h3>Cloud Documents</h3>
      <button @click="$emit('close')" class="close-btn">&times;</button>
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
            <div class="document-title">{{ doc.title }}</div>
            <div class="document-meta">
              {{ formatDate(doc.updated_at || doc.created_at) }}
              <span v-if="doc.is_public" class="public-badge">Public</span>
            </div>
          </div>
          <button
            @click.stop="deleteDoc(doc)"
            class="delete-btn"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
    
    <div class="cloud-footer">
      <button @click="createNew" class="create-btn">
        Create New Document
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cloud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.cloud-header h3 {
  margin: 0;
  font-size: 20px;
  color: #111827;
}

.close-btn {
  background: none;
  border: none;
  font-size: 32px;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #111827;
}

.cloud-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.loading,
.error,
.empty {
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
}

.error {
  color: #dc2626;
}

.documents-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.document-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.document-item:hover {
  background: #f9fafb;
  border-color: #3b82f6;
}

.document-info {
  flex: 1;
}

.document-title {
  font-weight: 500;
  color: #111827;
  margin-bottom: 4px;
}

.document-meta {
  font-size: 12px;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 8px;
}

.public-badge {
  background: #dbeafe;
  color: #1e40af;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 4px 8px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.delete-btn:hover {
  opacity: 1;
}

.cloud-footer {
  padding: 20px;
  border-top: 1px solid #e5e7eb;
}

.create-btn {
  width: 100%;
  padding: 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.create-btn:hover {
  background: #2563eb;
}
</style>
