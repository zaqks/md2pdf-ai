<template>
  <div class="media-browser">
    <div class="media-header">
      <h3>Media Library</h3>
      <button @click="$emit('close')" class="close-btn">
        <X :size="20" />
      </button>
    </div>
    
    <div class="media-body">
      <div class="upload-section">
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          multiple
          @change="handleFileSelect"
          style="display: none"
        />
        <button @click="$refs.fileInput.click()" class="upload-btn">
          <Upload :size="18" />
          <span>Upload Images</span>
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
                <Copy :size="14" />
              </button>
              <button @click="insertMarkdown(media)" class="action-btn" title="Insert Markdown">
                <Code :size="14" />
              </button>
              <button @click="deleteMedia(media)" class="action-btn delete" title="Delete">
                <Trash2 :size="14" />
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
import { X, Upload, Copy, Code, Trash2 } from 'lucide-vue-next';
import { useCloudStorage } from '../composables/useCloudStorage.js';
import { addLocalMedia, getLocalMediaList, deleteLocalMedia, getLocalMediaUrl } from '../utils/localMedia.js';

const props = defineProps({
  isCloudMode: {
    type: Boolean,
    default: false,
  },
});

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
    if (props.isCloudMode) {
      const mediaItems = await getMediaList();
      mediaList.value = mediaItems.map(media => ({
        ...media,
        url: getMediaUrl(media.id)
      }));
    } else {
      const mediaItems = getLocalMediaList();
      mediaList.value = mediaItems.map(media => ({
        ...media,
        url: getLocalMediaUrl(media.id)
      }));
    }
  } catch (err) {
    error.value = 'Failed to load media: ' + err.message;
  } finally {
    loading.value = false;
  }
}

async function handleFileSelect(event) {
  const files = Array.from(event.target.files);
  if (!files.length) return;
  
  uploading.value = true;
  error.value = '';
  
  try {
    if (props.isCloudMode) {
      await Promise.all(files.map(file => uploadMedia(file)));
    } else {
      await Promise.all(files.map(file => addLocalMedia(file)));
    }
    await loadMedia();
  } catch (err) {
    error.value = 'Failed to upload: ' + err.message;
  } finally {
    uploading.value = false;
    event.target.value = ''; // Reset input
  }
}

function copyUrl(media) {
  const url = props.isCloudMode ? getMediaUrl(media.id) : getLocalMediaUrl(media.id);
  navigator.clipboard.writeText(url);
  alert('URL copied to clipboard!');
}

function insertMarkdown(media) {
  const url = props.isCloudMode ? getMediaUrl(media.id) : `local-media:${media.id}`;
  const markdown = `![${media.original_filename}](${url})`;
  emit('insert', markdown);
}

async function deleteMedia(media) {
  if (!confirm(`Delete "${media.original_filename}"?`)) {
    return;
  }
  
  try {
    if (props.isCloudMode) {
      await deleteMediaFile(media.id);
    } else {
      deleteLocalMedia(media.id);
    }
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
  background: var(--color-surface);
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-border);
}

.media-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-l);
  border-bottom: 1px solid var(--color-border);
}

.media-header h3 {
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

.media-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-l);
}

.upload-section {
  margin-bottom: var(--spacing-l);
}

.upload-btn {
  padding: var(--spacing-m);
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 6px;
  font-size: var(--font-size-m);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
}

.upload-btn:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
  transform: translateY(-1px);
}

.uploading,
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

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-m);
}

.media-item {
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
  transition: var(--transition);
  background: var(--color-background);
}

.media-item:hover {
  border-color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.media-preview {
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: var(--color-surface);
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
  padding: var(--spacing-m);
}

.media-name {
  font-size: var(--font-size-s);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-s);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.media-actions {
  display: flex;
  gap: var(--spacing-s);
}

.action-btn {
  flex: 1;
  padding: var(--spacing-s);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: var(--transition);
}

.action-btn:hover {
  background: var(--color-background);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.action-btn.delete:hover {
  border-color: var(--color-error, #dc2626);
  color: var(--color-error, #dc2626);
}
</style>
