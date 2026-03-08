<template>
  <div class="media-browser">
    <div class="media-header">
      <h3>Media Library</h3>
      <button @click="$emit('close')" class="close-btn">&times;</button>
    </div>
    
    <div class="media-body">
      <div class="upload-section">
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="handleFileSelect"
          style="display: none"
        />
        <button @click="$refs.fileInput.click()" class="upload-btn">
          📤 Upload Image
        </button>
      </div>
      
      <div v-if="uploading" class="uploading">Uploading...</div>
      
      <div v-if="error" class="error">{{ error }}</div>
      
      <div v-if="loading" class="loading">Loading media...</div>
      
      <div v-else-if="mediaList.length === 0" class="empty">
        No media files yet. Upload an image to get started!
      </div>
      
      <div v-else class="media-grid">
        <div
          v-for="media in mediaList"
          :key="media.id"
          class="media-item"
        >
          <div class="media-preview">
            <img :src="media.url" :alt="media.original_filename" />
          </div>
          <div class="media-info">
            <div class="media-name" :title="media.original_filename">
              {{ media.original_filename }}
            </div>
            <div class="media-actions">
              <button @click="copyUrl(media)" class="action-btn" title="Copy URL">
                📋
              </button>
              <button @click="insertMarkdown(media)" class="action-btn" title="Insert Markdown">
                ✏️
              </button>
              <button @click="deleteMedia(media)" class="action-btn delete" title="Delete">
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCloudStorage } from '../composables/useCloudStorage.js';

const emit = defineEmits(['close', 'insert']);

const { uploadMedia, getMediaList, deleteMedia: deleteMediaFile, getMediaUrl } = useCloudStorage();

const mediaList = ref([]);
const loading = ref(false);
const uploading = ref(false);
const error = ref('');
const fileInput = ref(null);

async function loadMedia() {
  loading.value = true;
  error.value = '';
  
  try {
    mediaList.value = await getMediaList();
  } catch (err) {
    error.value = 'Failed to load media: ' + err.message;
  } finally {
    loading.value = false;
  }
}

async function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  uploading.value = true;
  error.value = '';
  
  try {
    const result = await uploadMedia(file);
    await loadMedia();
  } catch (err) {
    error.value = 'Failed to upload: ' + err.message;
  } finally {
    uploading.value = false;
    event.target.value = ''; // Reset input
  }
}

function copyUrl(media) {
  const url = getMediaUrl(media.id);
  navigator.clipboard.writeText(url);
  alert('URL copied to clipboard!');
}

function insertMarkdown(media) {
  const url = getMediaUrl(media.id);
  const markdown = `![${media.original_filename}](${url})`;
  emit('insert', markdown);
}

async function deleteMedia(media) {
  if (!confirm(`Delete "${media.original_filename}"?`)) {
    return;
  }
  
  try {
    await deleteMediaFile(media.id);
    await loadMedia();
  } catch (err) {
    alert('Failed to delete media: ' + err.message);
  }
}

onMounted(() => {
  loadMedia();
});
</script>

<style scoped>
.media-browser {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.media-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.media-header h3 {
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

.media-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.upload-section {
  margin-bottom: 20px;
}

.upload-btn {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.upload-btn:hover {
  background: #2563eb;
}

.uploading,
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

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.media-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s;
}

.media-item:hover {
  border-color: #3b82f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.media-preview {
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-preview img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.media-info {
  padding: 12px;
}

.media-name {
  font-size: 12px;
  color: #374151;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.media-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  flex: 1;
  padding: 6px;
  background: #f3f4f6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.action-btn:hover {
  background: #e5e7eb;
}

.action-btn.delete:hover {
  background: #fee2e2;
}
</style>
