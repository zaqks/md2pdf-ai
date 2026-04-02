<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ListPlus, Table2, ImagePlus, FileUp, FileDown, Menu, Image as ImageIcon, Cloud, CloudOff, Share2, ChevronDown, ChevronsLeft, ChevronsRight } from 'lucide-vue-next';
import Editor from '../components/Editor.vue';
import Preview from '../components/Preview.vue';
import AiAssistant from '../components/AiAssistant.vue';
import AppBar from '../components/AppBar.vue';
import FileBrowser from '../components/FileBrowser.vue';
import MediaBrowser from '../components/MediaBrowser.vue';
import {
  initializeNewFile,
  getFile,
  saveFile,
  deleteFile,
  renameFile,
  getCurrentFileName,
  setCurrentFileName,
  getFileList
} from '../utils/storage.js';
import { getLocalMediaList, getLocalMediaUrl } from '../utils/localMedia.js';
import { useAiAssistant } from '../composables/useAiAssistant.js';
import { useAuth } from '../composables/useAuth.js';
import { useCloudStorage } from '../composables/useCloudStorage.js';

const markdown = ref('# Hello World !');
const isDragging = ref(false);
const editorContainerRef = ref(null);
const mainContainerRef = ref(null);
const previewRef = ref(null);
const editorRef = ref(null);
const currentFileName = ref('');
const files = ref([]);
const isMobileMenuOpen = ref(false);
const activeTab = ref('editor'); // 'editor' or 'preview'
const isLoading = ref(false);
const loadingMessage = ref('');

// Cloud mode
const { isCloudMode, setCloudMode, createDocument, getDocument, updateDocument, getShareUrl, getDocuments, deleteDocument } = useCloudStorage();
const { isAuthenticated, user, logout: logoutUser, getCurrentUser, getOrCreateUser } = useAuth();
const router = useRouter();
const route = useRoute();
const showMediaBrowser = ref(false);
const currentDocumentId = ref(null);
const currentDocumentIsPublic = ref(false);
const currentDocumentOwnerId = ref(null); // UUID of the doc's owner
const cloudDocuments = ref([]);
let forkSourceDocumentId = null;
const isDocsCollapsed = ref(false);

// Computed: true when the current user owns the loaded cloud doc
const isDocumentOwner = computed(() => {
  if (!isCloudMode.value || !currentDocumentOwnerId.value || !user.value) return false;
  return String(currentDocumentOwnerId.value) === String(user.value.id);
});

// Dropdown state
const isTemplatesDropdownOpen = ref(false);

// AI Assistant
const {
  status: aiStatus,
  isProcessing: aiProcessing,
  error: aiError,
  connect: connectAi,
  disconnect: disconnectAi,
  askAi,
  undo: undoAi,
  canUndo: canUndoAi
} = useAiAssistant();

// Autosave interval (save every 2 seconds)
let autosaveInterval = null;

// Computed: Check if cloud mode is available (AI must be connected)
const isCloudModeAvailable = computed(() => aiStatus.value === 'connected');

// Track scrolling state to prevent infinite loops
let isScrollingEditor = false;
let isScrollingPreview = false;
let editorScrollTimeout = null;
let previewScrollTimeout = null;

// Refresh file list
async function refreshFileList(options = {}) {
  const { force = false } = options;

  if (isCloudMode.value) {
    try {
      isLoading.value = true;
      loadingMessage.value = 'Loading documents...';
      cloudDocuments.value = await getDocuments({ forceRefresh: force });
      files.value = cloudDocuments.value;
    } catch (error) {
      console.error('Failed to load cloud documents:', error);
      files.value = [];
    } finally {
      isLoading.value = false;
    }
  } else {
    files.value = getFileList();
  }
}

// Autosave function
function autoSave() {
  if (isCloudMode.value && currentDocumentId.value && isDocumentOwner.value) {
    // Debounce cloud saves — only the owner may write
    if (autosaveInterval) {
      clearTimeout(autosaveInterval);
    }
    autosaveInterval = setTimeout(async () => {
      try {
        await updateDocument(currentDocumentId.value, {
          title: currentFileName.value,
          content: markdown.value
        });
      } catch (error) {
        console.error('Failed to auto-save to cloud:', error);
      }
    }, 2000);
  } else if (currentFileName.value) {
    saveFile(currentFileName.value, markdown.value);
    refreshFileList();
  }
}

// Watch markdown changes and trigger autosave
watch(markdown, () => {
  autoSave();
});

// Cloud mode handlers
async function ensureCloudUser() {
  if (!isAuthenticated.value) {
    const result = await getOrCreateUser();
    if (!result.success) {
      throw new Error(result.error || 'Unable to authenticate');
    }
  }

  if (!user.value) {
    const me = await getCurrentUser();
    if (!me.success) {
      throw new Error(me.error || 'Unable to fetch current user');
    }
  }
}

async function toggleCloudMode() {
  // Prevent toggling if AI is not connected
  if (!isCloudModeAvailable.value) {
    alert('Cloud mode requires AI Assistant connection. Please wait for connection...');
    return;
  }
  
  const newMode = !isCloudMode.value;

  if (newMode && !isAuthenticated.value) {
    // Auto-create anonymous user
    const result = await getOrCreateUser();
    if (!result.success) {
      alert('Failed to enable cloud mode: ' + result.error);
      return;
    }
  }

  setCloudMode(newMode);

  if (newMode) {
    // Switching to cloud mode
    currentDocumentId.value = null;
    await refreshFileList({ force: true });
    
    // Auto-open first document or create new one
    if (files.value.length > 0) {
      await selectFile(files.value[0]);
    } else {
      await createNewFile();
    }
  } else {
    // Switching to offline mode
    currentDocumentId.value = null;
    currentDocumentOwnerId.value = null;
    await refreshFileList();
    
    // Auto-open first file or create new one
    if (files.value.length > 0) {
      router.push(`/docs/local/${encodeURIComponent(files.value[0].name)}`);
    } else {
      await createNewFile();
    }
  }
}

async function copyShareLink() {
  if (!currentDocumentId.value) {
    return;
  }
  
  try {
    const shareUrl = getShareUrl(currentDocumentId.value);
    await navigator.clipboard.writeText(shareUrl);
    alert('Share link copied to clipboard!');
  } catch (error) {
    alert('Failed to copy link: ' + error.message);
  }
}



function openMediaBrowser() {
  if (isCloudMode.value && !isAuthenticated.value) {
    ensureCloudUser().then(() => {
      showMediaBrowser.value = true;
    }).catch((error) => {
      alert('Unable to open media library: ' + error.message);
    });
  } else {
    showMediaBrowser.value = true;
  }
}

function toggleDocsCollapse() {
  isDocsCollapsed.value = !isDocsCollapsed.value;
}

function handleMediaInsert(markdownText) {
  markdown.value += '\n' + markdownText + '\n';
  showMediaBrowser.value = false;
}

function normalizeLocalMediaReferences(text) {
  let normalized = text;
  const mediaItems = getLocalMediaList();
  if (!Array.isArray(mediaItems) || mediaItems.length === 0) {
    return normalized;
  }

  // Replace embedded data URLs with local-media references when we can match by dataUrl
  const dataUrlRegex = /!\[(.*?)\]\((data:[^)]+)\)/g;
  normalized = normalized.replace(dataUrlRegex, (match, alt, url) => {
    const found = mediaItems.find((item) => item.dataUrl === url);
    if (found) {
      return `![${alt}](local-media:${found.id})`;
    }
    return match;
  });

  return normalized;
}

// Load a cloud document by UUID (called when route changes)
async function loadCloudDoc(uuid) {
  if (!uuid) return;
  try {
    isLoading.value = true;
    loadingMessage.value = 'Loading document...';
    await ensureCloudUser();
    const fullDoc = await getDocument(uuid);

    // If the current user is NOT the owner, fork a copy instead of showing read-only
    const currentUserId = user.value?.id;
    const isOwner = currentUserId && String(fullDoc.user_id) === String(currentUserId);

    if (!isOwner) {
      if (forkSourceDocumentId === uuid) {
        return;
      }
      forkSourceDocumentId = uuid;
      loadingMessage.value = 'Creating your copy...';
      const copyTitle = fullDoc.title + ' (Copy)';
      const copy = await createDocument(copyTitle, fullDoc.content);
      await refreshFileList({ force: true });
      // Redirect to the copy — this will re-trigger the watcher and load it as owner
      router.replace(`/docs/cloud/${copy.id}`);
      forkSourceDocumentId = null;
      return;
    }

    currentFileName.value = fullDoc.title;
    markdown.value = fullDoc.content;
    currentDocumentId.value = fullDoc.id;
    currentDocumentIsPublic.value = fullDoc.is_public;
    currentDocumentOwnerId.value = fullDoc.user_id;
  } catch (error) {
    console.error('loadCloudDoc error:', error);
    alert('Failed to load document: ' + error.message);
  } finally {
    isLoading.value = false;
    forkSourceDocumentId = null;
  }
}

// Load a local document by filename (called when route changes)
function loadLocalDoc(uuid) {
  if (!uuid) return;
  const fileData = getFile(uuid);
  if (fileData) {
    currentFileName.value = uuid;
    const normalizedContent = normalizeLocalMediaReferences(fileData.content);
    markdown.value = normalizedContent;
    if (normalizedContent !== fileData.content) {
      saveFile(uuid, normalizedContent);
    }
    setCurrentFileName(uuid);
  }
}

// Select a file — navigate to the right URL; the route watcher does the actual load
async function selectFile(fileOrName) {
  if (isCloudMode.value) {
    if (!fileOrName || !fileOrName.id) {
      console.error('selectFile: Invalid file object', fileOrName);
      alert('Failed to load document: Invalid document reference');
      return;
    }
    router.push(`/docs/cloud/${fileOrName.id}`);
  } else {
    // fileOrName is a filename string
    router.push(`/docs/local/${encodeURIComponent(fileOrName)}`);
  }
}

// Create new file — then navigate to its URL
async function createNewFile() {
  if (isCloudMode.value) {
    try {
      isLoading.value = true;
      loadingMessage.value = 'Creating document...';
      const timestamp = new Date().getTime();
      const title = `Document ${timestamp}`;
      const doc = await createDocument(title, '# ' + title + '\n\n');
      await refreshFileList({ force: true });
      // Navigate — the route watcher will load the doc
      router.push(`/docs/cloud/${doc.id}`);
    } catch (error) {
      alert('Failed to create document: ' + error.message);
    } finally {
      isLoading.value = false;
    }
  } else {
    const newFile = initializeNewFile();
    refreshFileList();
    router.push(`/docs/local/${encodeURIComponent(newFile.fileName)}`);
  }
}

// Delete file
async function handleDeleteFile(fileOrName) {
  if (isCloudMode.value) {
    // Cloud document
    try {
      isLoading.value = true;
      loadingMessage.value = 'Deleting document...';
      await deleteDocument(fileOrName.id);
      await refreshFileList({ force: true });
      
      // If deleted document was active, clear or load another
      if (currentDocumentId.value === fileOrName.id) {
        if (files.value.length > 0) {
          await selectFile(files.value[0]);
        } else {
          await createNewFile();
        }
      }
    } catch (error) {
      alert('Failed to delete document: ' + error.message);
    } finally {
      isLoading.value = false;
    }
  } else {
    // Offline file
    deleteFile(fileOrName);
    refreshFileList();
    
    // If deleted file was active, load another file or create new one
    if (currentFileName.value === fileOrName) {
      const remainingFiles = getFileList();
      if (remainingFiles.length > 0) {
        selectFile(remainingFiles[0].name);
      } else {
        createNewFile();
      }
    }
  }
}

// Rename file
async function handleRenameFile(newName) {
  if (newName !== currentFileName.value) {
    if (isCloudMode.value) {
      // Cloud document - update via API
      try {
        isLoading.value = true;
        loadingMessage.value = 'Renaming document...';
        await updateDocument(currentDocumentId.value, { title: newName });
        currentFileName.value = newName;
        await refreshFileList({ force: true });
      } catch (error) {
        alert('Failed to rename document: ' + error.message);
      } finally {
        isLoading.value = false;
      }
    } else {
      // Offline file
      if (renameFile(currentFileName.value, newName)) {
        currentFileName.value = newName;
        setCurrentFileName(newName);
        refreshFileList();
        // Update URL to reflect new filename
        router.replace(`/docs/local/${encodeURIComponent(newName)}`);
      } else {
        alert('File name already exists or invalid');
      }
    }
  }
}

function insertTableOfContents() {
  const lines = markdown.value.split('\n');
  const headings = [];

  lines.forEach((line) => {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const anchor = text.toLowerCase().trim().replace(/\s+/g, '-');
      headings.push({ level, text, anchor });
    }
  });

  if (headings.length === 0) {
    alert('No headings found in the document. Add some headings (# Heading) first!');
    return;
  }

  let toc = '\n## Table of Contents\n\n';
  headings.forEach(heading => {
    const indent = '  '.repeat(heading.level - 1);
    toc += `${indent}- [${heading.text}](#${heading.anchor})\n`;
  });
  toc += '\n';

  markdown.value += toc;
}

function insertTable() {
  const rows = prompt('Enter number of rows:', '3');
  const cols = prompt('Enter number of columns:', '3');

  if (!rows || !cols || isNaN(rows) || isNaN(cols)) return;

  const numRows = parseInt(rows);
  const numCols = parseInt(cols);

  if (numRows < 1 || numCols < 1 || numRows > 100 || numCols > 100) {
    alert('Please enter valid numbers between 1 and 100');
    return;
  }

  let table = '\n';
  table += '| ' + Array(numCols).fill('Header').map((h, i) => h + ' ' + (i + 1)).join(' | ') + ' |\n';
  table += '| ' + Array(numCols).fill('---').join(' | ') + ' |\n';

  for (let i = 0; i < numRows - 1; i++) {
    table += '| ' + Array(numCols).fill('Cell').join(' | ') + ' |\n';
  }
  table += '\n';

  markdown.value += table;
}

function insertImage() {
  const url = prompt('Enter image URL:', 'https://');
  if (!url) return;

  const alt = prompt('Enter image description (alt text):', 'Image');
  const imageHTML = `\n<img src="${url}" alt="${alt || 'Image'}" />\n`;

  markdown.value += imageHTML;
}

function uploadFile(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Append content instead of replacing
      const newContent = e.target.result;
      markdown.value = markdown.value ? markdown.value + '\n\n' + newContent : newContent;
    };
    reader.readAsText(file);
  }
}

function transformToPDF() {
  window.print();
}

async function handleAiSubmit(query) {
  try {
    const response = await askAi(query, markdown.value);
    // Override current content with AI response
    markdown.value = response;
    // Force editor to refresh layout after content update
    setTimeout(() => {
      if (editorRef.value) {
        editorRef.value.refresh();
      }
    }, 100);
  } catch (error) {
    console.error('AI Error:', error);
    alert(`AI Error: ${error.message}`);
  }
}

function handleAiUndo() {
  const previousContent = undoAi();
  if (previousContent !== null) {
    markdown.value = previousContent;
    // Force editor to refresh layout after undo
    setTimeout(() => {
      if (editorRef.value) {
        editorRef.value.refresh();
      }
    }, 100);
  }
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

function switchTab(tab) {
  activeTab.value = tab;
}



// Handle editor scroll - sync to preview
function onEditorScroll(scrollPercentage) {
  if (isScrollingPreview || !previewRef.value) return;

  isScrollingEditor = true;

  if (editorScrollTimeout) {
    clearTimeout(editorScrollTimeout);
  }

  requestAnimationFrame(() => {
    if (previewRef.value && isFinite(scrollPercentage)) {
      previewRef.value.scrollTo(scrollPercentage);
    }
  });

  editorScrollTimeout = setTimeout(() => {
    isScrollingEditor = false;
  }, 150);
}

// Handle preview scroll - sync to editor
function onPreviewScroll(scrollPercentage) {
  if (isScrollingEditor || !editorRef.value) return;

  isScrollingPreview = true;

  if (previewScrollTimeout) {
    clearTimeout(previewScrollTimeout);
  }

  requestAnimationFrame(() => {
    if (isFinite(scrollPercentage) && editorRef.value) {
      editorRef.value.scrollTo(scrollPercentage);
    }
  });

  previewScrollTimeout = setTimeout(() => {
    isScrollingPreview = false;
  }, 150);
}

// Resize functionality
function startDrag(event) {
  isDragging.value = true;
  event.preventDefault();
}

function onDrag(event) {
  if (!isDragging.value || !editorContainerRef.value) return;

  const container = mainContainerRef.value || event.currentTarget;
  const containerRect = container.getBoundingClientRect();
  const newWidth = event.clientX - containerRect.left;
  const minWidth = 200;
  const maxWidth = containerRect.width - 200;

  if (newWidth >= minWidth && newWidth <= maxWidth) {
    editorContainerRef.value.style.flex = `0 0 ${newWidth}px`;
  }
}

function stopDrag() {
  isDragging.value = false;
}

function setDefaultSplit() {
  if (!mainContainerRef.value || !editorContainerRef.value) return;
  const containerWidth = mainContainerRef.value.clientWidth || 0;
  const desired = containerWidth > 0 ? containerWidth / 2 : 400;
  const minWidth = 200;
  const maxWidth = Math.max(minWidth, containerWidth - 200);
  const width = Math.min(Math.max(desired, minWidth), maxWidth);
  editorContainerRef.value.style.flex = `0 0 ${width}px`;
}

// Toggle templates dropdown
function toggleTemplatesDropdown() {
  isTemplatesDropdownOpen.value = !isTemplatesDropdownOpen.value;
}

// Close dropdown when clicking outside
function closeTemplatesDropdown(event) {
  if (isTemplatesDropdownOpen.value) {
    const dropdown = event.target.closest('.dropdown-container');
    if (!dropdown) {
      isTemplatesDropdownOpen.value = false;
    }
  }
}

// React to route changes — this is the single source of truth for which doc is shown
watch(
  () => route.params.uuid,
  async (uuid, oldUuid) => {
    if (!uuid || uuid === oldUuid) return;
    if (route.path.startsWith('/docs/cloud/')) {
      await loadCloudDoc(uuid);
    } else if (route.path.startsWith('/docs/local/')) {
      loadLocalDoc(decodeURIComponent(uuid));
    }
  }
);

// Setup on mount
onMounted(async () => {
  const uuid = route.params.uuid;
  const isCloudUrl = route.path.startsWith('/docs/cloud/');
  const isLocalUrl = route.path.startsWith('/docs/local/');

  await nextTick();
  setDefaultSplit();

  // Handle URL/mode mismatch - respect persisted cloud mode, navigate to correct URL
  if (isCloudUrl && !isCloudMode.value) {
    // Cloud URL but local mode persisted - activate cloud mode for this cloud link
    if (!isAuthenticated.value) {
      await getOrCreateUser();
    }
    setCloudMode(true);
  } else if (isLocalUrl && isCloudMode.value) {
    // Local URL but cloud mode persisted - redirect to cloud instead
    // Don't change the persisted mode, just navigate away from this local URL
    currentDocumentId.value = null;
    if (!isAuthenticated.value) {
      await getOrCreateUser();
    }
    await getCurrentUser();
    await refreshFileList();
    
    if (files.value.length > 0) {
      router.replace(`/docs/cloud/${files.value[0].id}`);
      return;
    } else {
      await createNewFile();
      return;
    }
  }

  if (isCloudMode.value) {
    if (!isAuthenticated.value) {
      await getOrCreateUser();
    }
    await getCurrentUser();
    await refreshFileList();

    if (uuid && isCloudUrl) {
      // URL already specifies a cloud doc — load it directly
      await loadCloudDoc(uuid);
    } else if (files.value.length > 0) {
      // Navigate to the most recent cloud doc
      router.replace(`/docs/cloud/${files.value[0].id}`);
    } else {
      await createNewFile();
    }
  } else {
    await refreshFileList();

    if (uuid && route.path.startsWith('/docs/local/')) {
      // URL already specifies a local doc — load it directly
      loadLocalDoc(decodeURIComponent(uuid));
    } else {
      // Fall back to the last opened file or create a new one
      const savedFileName = getCurrentFileName();
      if (savedFileName && getFile(savedFileName)) {
        router.replace(`/docs/local/${encodeURIComponent(savedFileName)}`);
      } else if (files.value.length > 0) {
        router.replace(`/docs/local/${encodeURIComponent(files.value[0].name)}`);
      } else {
        const newFile = initializeNewFile();
        refreshFileList();
        router.replace(`/docs/local/${encodeURIComponent(newFile.fileName)}`);
      }
    }
  }

  connectAi();
  document.addEventListener('click', closeTemplatesDropdown);
});

onBeforeUnmount(() => {
  disconnectAi(); // Disconnect AI WebSocket
  
  // Remove click listener
  document.removeEventListener('click', closeTemplatesDropdown);

  if (editorScrollTimeout) {
    clearTimeout(editorScrollTimeout);
  }
  if (previewScrollTimeout) {
    clearTimeout(previewScrollTimeout);
  }
  if (autosaveInterval) {
    clearTimeout(autosaveInterval);
  }
});

</script>

<template>
  <div id="app">
    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ hidden: isMobileMenuOpen }">
      <Menu :size="24" />
    </button>

    <!-- Mobile Overlay -->
    <div v-if="isMobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>

    <aside class="sidebar" :class="{ 'mobile-open': isMobileMenuOpen }" @mouseleave="isTemplatesDropdownOpen = false">
      <div class="logo">
        <img src="/logo.svg" alt="md2pdf-AI" class="logo-img" />
        <span class="logo-text">md2pdf-AI</span>
      </div>

      <div class="docs-toggle">
        <button class="button outline" @click="toggleDocsCollapse" title="Toggle docs list">
          <component :is="isDocsCollapsed ? ChevronsRight : ChevronsLeft" :size="20" />
          <span class="button-text">{{ isDocsCollapsed ? 'Show Docs' : 'Hide Docs' }}</span>
        </button>
      </div>

      <FileBrowser 
        v-show="!isDocsCollapsed"
        :files="files" 
        :current-file-name="currentFileName"
        :is-cloud-mode="isCloudMode"
        :current-document-id="currentDocumentId"
        @select="(file) => { selectFile(file); closeMobileMenu(); }" 
        @delete="handleDeleteFile"
        @create="() => { createNewFile(); closeMobileMenu(); }" />

      <nav class="menu">
        <button 
          class="button" 
          :class="[isCloudMode ? 'filled' : 'outline', { 'disabled': !isCloudModeAvailable }]" 
          @click="toggleCloudMode" 
          :disabled="!isCloudModeAvailable"
          :title="!isCloudModeAvailable ? 'Waiting for AI connection...' : (isCloudMode ? 'Switch to Offline Mode' : 'Switch to Cloud Mode')"
        >
          <Cloud v-if="!isCloudMode" :size="20" />
          <CloudOff v-else :size="20" />
          <span class="button-text">{{ isCloudMode ? 'Offline' : 'Cloud' }}</span>
        </button>
        <button v-if="isCloudMode && currentDocumentId" class="button outline" @click="copyShareLink" title="Copy Share Link">
          <Share2 :size="20" />
          <span class="button-text">Copy Link</span>
        </button>
        <button 
          class="button outline" 
          :class="{ 'disabled': isCloudMode && !isCloudModeAvailable }" 
          @click="openMediaBrowser" 
          :disabled="isCloudMode && !isCloudModeAvailable"
          title="Media Library"
        >
          <ImageIcon :size="20" />
          <span class="button-text">Media</span>
        </button>
        <div class="dropdown-container">
          <button class="button outline" @click="toggleTemplatesDropdown" title="Insert Template">
            <ListPlus :size="20" />
            <span class="button-text">Insert</span>
            <ChevronDown :size="16" class="dropdown-icon" :class="{ rotated: isTemplatesDropdownOpen }" />
          </button>
          <div v-if="isTemplatesDropdownOpen" class="dropdown-menu">
            <button class="dropdown-item" @click="insertTableOfContents">
              <ListPlus :size="18" />
              <span>Table of Contents</span>
            </button>
            <button class="dropdown-item" @click="insertTable">
              <Table2 :size="18" />
              <span>Table</span>
            </button>
            <button class="dropdown-item" @click="insertImage">
              <ImagePlus :size="18" />
              <span>Image</span>
            </button>
          </div>
        </div>
        <button class="button outline" @click="$refs.fileInput.click()" title="Import File">
          <FileUp :size="20" />
          <span class="button-text">Import</span>
        </button>
        <input ref="fileInput" type="file" accept=".md,.markdown,.txt" @change="uploadFile" style="display: none">
        <button class="button filled" @click="transformToPDF" title="Export to PDF">
          <FileDown :size="20" />
          <span class="button-text">Export</span>
        </button>
      </nav>
    </aside>

    <div class="content-area">
      <AppBar 
        :file-name="currentFileName" 
        :is-cloud-mode="isCloudMode"
        :is-authenticated="isAuthenticated"
        :user="user"
        @rename="handleRenameFile"
      />      <!-- Mobile Tab Switcher -->
      <div class="mobile-tabs">
        <button class="tab-button" :class="{ active: activeTab === 'editor' }" @click="switchTab('editor')">
          Editor
        </button>
        <button class="tab-button" :class="{ active: activeTab === 'preview' }" @click="switchTab('preview')">
          Preview
        </button>
      </div>

      <div class="main-container" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
        <div ref="editorContainerRef" class="editor-container" :class="{ 'mobile-hidden': activeTab !== 'editor' }">
          <Editor ref="editorRef" v-model="markdown" @scroll="onEditorScroll" />
        </div>
        <div class="drag-bar" :class="{ dragging: isDragging }" @mousedown="startDrag"></div>
        <div class="preview-container" :class="{ 'mobile-hidden': activeTab !== 'preview' }">
          <Preview ref="previewRef" :markdown="markdown" @scroll="onPreviewScroll" />
        </div>
      </div>
    </div>

    <AiAssistant :status="aiStatus" :is-processing="aiProcessing" :can-undo="canUndoAi()"
      :hide-on-mobile="isMobileMenuOpen" @submit="handleAiSubmit" @undo="handleAiUndo" />

    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>{{ loadingMessage }}</p>
      </div>
    </div>

    <!-- Modals -->
    <div v-if="showMediaBrowser" class="modal-overlay" @click.self="showMediaBrowser = false">
      <MediaBrowser :is-cloud-mode="isCloudMode" @close="showMediaBrowser = false" @insert="handleMediaInsert" />
    </div>
  </div>
</template>
<style scoped>
/* Clean design system */
#app {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: var(--color-background);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  backdrop-filter: blur(4px);
}

.loading-spinner {
  background: var(--color-surface);
  border-radius: 12px;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-m);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
}

.loading-spinner p {
  color: var(--color-text-primary);
  font-size: var(--font-size-m);
  margin: 0;
  font-weight: 500;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-l) 0;
  width: 70px;
  transition: width 0.3s ease;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;
}

.docs-toggle {
  padding: 0 var(--spacing-s) var(--spacing-s) var(--spacing-s);
}

.docs-toggle .button {
  justify-content: center;
}

.sidebar:hover {
  width: 280px;
}

.logo {
  padding: 0 var(--spacing-s);
  margin-bottom: var(--spacing-l);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  justify-content: center;
  transition: justify-content 0.3s ease;
}

.sidebar:hover .logo {
  justify-content: flex-start;
  padding-left: var(--spacing-l);
}

/* Logo image - same size as menu buttons */
.logo-img {
  width: 54px;
  height: 54px;
  display: block;
  flex-shrink: 0;
  padding: var(--spacing-s);
}

/* Logo text hidden when collapsed, visible on hover/expanded sidebar */
.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 600;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: var(--color-text-primary);
  opacity: 0;
  transition: opacity 0.3s ease, width 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.sidebar:hover .logo-text {
  opacity: 1;
  width: auto;
}

/* Hide file browser when collapsed */
.sidebar :deep(.file-browser) {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.sidebar:hover :deep(.file-browser) {
  opacity: 1;
  pointer-events: auto;
}

.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 600;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.menu {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  padding: 0 var(--spacing-s);
  margin-top: auto;
  padding-top: var(--spacing-l);
  border-top: 1px solid var(--color-border);
}

.button {
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-radius: var(--spacing-s);
  cursor: pointer;
  font-size: var(--font-size-s);
  font-weight: 500;
  transition: var(--transition);
  font-family: var(--font-family);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  justify-content: center;
  aspect-ratio: 1 / 1;
  min-height: 0;
}

.sidebar:hover .button {
  justify-content: flex-start;
  gap: var(--spacing-m);
  aspect-ratio: auto;
}

.button svg {
  flex-shrink: 0;
}

.button-text {
  opacity: 0;
  width: 0;
  transition: opacity 0.3s ease, width 0.3s ease;
  overflow: hidden;
}

.sidebar:hover .button-text {
  opacity: 1;
  width: auto;
}

.button:active {
  transform: translateY(0);
}

/* Outline buttons (most buttons) */
.button.outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.button.outline:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
  transform: translateY(-1px);
}

/* Filled button (Transform only) */
.button.filled {
  background-color: var(--color-primary);
  color: var(--color-background);
  border: 2px solid var(--color-primary);
}

.button.filled:hover {
  background-color: var(--color-hover);
  border-color: var(--color-hover);
  transform: translateY(-1px);
}

.button.active {
  background-color: var(--color-primary);
  color: var(--color-background);
  border-color: var(--color-primary);
}

.button.active:hover {
  background-color: var(--color-hover);
  border-color: var(--color-hover);
}

/* Disabled button state */
.button.disabled,
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border-color: var(--color-border);
}

.button.filled.disabled,
.button.filled:disabled {
  background-color: var(--color-surface);
  border-color: var(--color-border);
}

/* Dropdown styles */
.dropdown-container {
  position: relative;
  width: 100%;
}

.dropdown-icon {
  transition: transform 0.3s ease;
  margin-left: auto;
  opacity: 0;
  width: 0;
}

.sidebar:hover .dropdown-icon {
  opacity: 1;
  width: auto;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: calc(100% + var(--spacing-xs));
  background-color: var(--color-surface);
  border: 2px solid var(--color-primary);
  border-radius: var(--spacing-s);
  padding: var(--spacing-xs);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  min-width: 200px;
  box-shadow: var(--shadow-md);
  z-index: 1000;
  animation: dropdownFadeIn 0.2s ease;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  padding: var(--spacing-s) var(--spacing-m);
  border: none;
  background-color: transparent;
  color: var(--color-text-primary);
  font-size: var(--font-size-s);
  font-weight: 500;
  font-family: var(--font-family);
  cursor: pointer;
  border-radius: var(--spacing-xs);
  transition: var(--transition);
  text-align: left;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
  transform: translateY(-1px);
}

.dropdown-item svg {
  flex-shrink: 0;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  transition: margin-left 0.3s ease;
}

.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
  background-color: var(--color-surface);
}

.editor-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--color-background);
  overflow: hidden;
  min-height: 0;
}

.drag-bar {
  width: 3px;
  background-color: var(--color-border);
  cursor: col-resize;
  transition: var(--transition);
  position: relative;
}

.drag-bar:hover,
.drag-bar.dragging {
  background-color: var(--color-primary);
  width: 4px;
}

.preview-container {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: var(--spacing-2xl);
  background-color: var(--color-background);
  will-change: scroll-position;
}

/* Smooth scrollbar styling */
.preview-container::-webkit-scrollbar {
  width: 8px;
}

.preview-container::-webkit-scrollbar-track {
  background: var(--color-surface);
}

.preview-container::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 4px;
}

.preview-container::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}

@media print {

  /* Hide everything except preview content */
  .sidebar,
  .editor-container,
  .drag-bar,
  .mobile-menu-toggle,
  .mobile-tabs,
  aside,
  nav {
    display: none !important;
  }

  /* Hide AppBar and other content-area children except main-container */
  .content-area>*:not(.main-container) {
    display: none !important;
  }

  /* Hide AI Assistant */
  #app>*:not(.content-area) {
    display: none !important;
  }

  /* Ensure proper layout for print */
  #app {
    display: block !important;
    height: auto !important;
  }

  .content-area {
    margin-left: 0 !important;
    width: 100% !important;
    height: auto !important;
  }

  .main-container {
    display: block !important;
    height: auto !important;
  }

  .preview-container {
    display: block !important;
    overflow: visible !important;
    padding: 0 !important;
    height: auto !important;
    width: 100% !important;
  }
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  position: fixed;
  top: var(--spacing-m);
  left: var(--spacing-m);
  z-index: 200;
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;
  border-radius: 12px;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-toggle:active {
  transform: scale(0.92);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.mobile-menu-toggle.hidden {
  opacity: 0;
  pointer-events: none;
}

.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
}

.mobile-tabs {
  display: none;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-s);
  gap: var(--spacing-s);
}

.tab-button {
  flex: 1;
  padding: var(--spacing-l);
  border: none;
  background-color: transparent;
  color: var(--color-text-secondary);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-family: var(--font-family);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-height: 48px;
}

.tab-button.active {
  background-color: var(--color-primary);
  color: var(--color-background);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-overlay {
    display: block;
  }

  .mobile-tabs {
    display: flex;
  }

  .sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    width: 85%;
    max-width: 340px;
    height: 100vh;
    z-index: 100;
    background-color: var(--color-background);
    border-right: 1px solid var(--color-border);
    padding: var(--spacing-xl);
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  }

  .sidebar.mobile-open {
    left: 0;
  }

  .sidebar:hover {
    width: 85%;
    max-width: 340px;
  }

  .logo {
    opacity: 1;
    margin-bottom: var(--spacing-xl);
    padding: 0;
    justify-content: flex-start;
  }

  .logo-text {
    opacity: 1;
    width: auto;
    font-size: 1.25rem;
  }

  .sidebar :deep(.file-browser) {
    opacity: 1;
    pointer-events: auto;
  }

  .menu {
    padding: 0 0 var(--spacing-xl) 0;
  }

  .button {
    justify-content: flex-start;
    gap: var(--spacing-m);
    padding: var(--spacing-m) var(--spacing-l);
    min-height: 48px;
    font-size: var(--font-size-m);
  }

  .button-text {
    opacity: 1;
    width: auto;
  }

  .dropdown-icon {
    opacity: 1;
    width: auto;
  }

  .dropdown-menu {
    position: static;
    margin-left: 0;
    margin-top: var(--spacing-xs);
    width: 100%;
    animation: none;
  }

  .content-area {
    margin-left: 0;
  }

  .content-area> :deep(.app-bar) {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: var(--color-surface);
  }

  .mobile-tabs {
    position: sticky;
    top: 50px;
    /* Height of app-bar */
    z-index: 50;
    background-color: var(--color-surface);
  }

  .main-container {
    flex-direction: column;
  }

  .drag-bar {
    display: none;
  }

  .editor-container,
  .preview-container {
    flex: 1;
    min-height: 0;
    padding-bottom: 100px;
    /* Space for AI input */
  }

  .editor-container.mobile-hidden,
  .preview-container.mobile-hidden {
    display: none;
  }

  .preview-container {
    padding: var(--spacing-xl);
    padding-bottom: 120px;
    /* Space for AI input */
    font-size: 16px;
    line-height: 1.7;
  }

  .editor-container {
    padding: var(--spacing-m);
  }

  #app {
    flex-direction: column;
  }
}
</style>