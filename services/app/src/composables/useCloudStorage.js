import { ref } from 'vue';
import { useAuth } from './useAuth.js';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';
const DOCS_CACHE_KEY = 'md2pdf_cloud_docs_cache_v1';
const DOC_CACHE_PREFIX = 'md2pdf_cloud_doc_';
const CACHE_TTL_MS = 60_000;

function isCacheFresh(timestamp) {
  if (!timestamp) return false;
  return Date.now() - timestamp < CACHE_TTL_MS;
}

function loadDocsCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(DOCS_CACHE_KEY) || 'null');
    if (!cached || !isCacheFresh(cached.timestamp)) return null;
    return cached.documents;
  } catch (error) {
    console.error('Failed to read cloud docs cache:', error);
    return null;
  }
}

function saveDocsCache(documents) {
  try {
    localStorage.setItem(
      DOCS_CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), documents })
    );
  } catch (error) {
    console.error('Failed to write cloud docs cache:', error);
  }
}

function clearDocsCache() {
  localStorage.removeItem(DOCS_CACHE_KEY);
}

function docCacheKey(documentId) {
  return `${DOC_CACHE_PREFIX}${documentId}`;
}

function loadDocCache(documentId) {
  try {
    const cached = JSON.parse(localStorage.getItem(docCacheKey(documentId)) || 'null');
    if (!cached || !isCacheFresh(cached.timestamp)) return null;
    return cached.document;
  } catch (error) {
    console.error('Failed to read document cache:', error);
    return null;
  }
}

function saveDocCache(document) {
  try {
    localStorage.setItem(
      docCacheKey(document.id),
      JSON.stringify({ timestamp: Date.now(), document })
    );
  } catch (error) {
    console.error('Failed to write document cache:', error);
  }
}

function clearDocCache(documentId) {
  localStorage.removeItem(docCacheKey(documentId));
}

function upsertDocListCache(document) {
  const docs = loadDocsCache();
  if (!docs) return;
  const filtered = docs.filter((doc) => String(doc.id) !== String(document.id));
  saveDocsCache([document, ...filtered]);
}

function removeFromDocListCache(documentId) {
  const docs = loadDocsCache();
  if (!docs) return;
  saveDocsCache(docs.filter((doc) => String(doc.id) !== String(documentId)));
}

// Cloud mode state - DISABLED (temporarily disabled to prevent cloud mode switching)
const isCloudMode = ref(false);

// Set cloud mode - DISABLED (cloud mode is disabled)
export function setCloudMode(enabled) {
  // Cloud mode is temporarily disabled - this function is now a no-op
  isCloudMode.value = false;
  // localStorage.setItem('cloud_mode', enabled.toString()); // Disabled
}

// Get cloud mode
export function getCloudMode() {
  return isCloudMode.value;
}

// Documents API
export async function createDocument(title, content = '', isPublic = false) {
  const { getAuthHeaders } = useAuth();
  
  try {
    const response = await fetch(`${API_URL}/api/documents`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ title, content, is_public: isPublic }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to create document');
    }

    const created = await response.json();
    saveDocCache(created);
    upsertDocListCache(created);
    return created;
  } catch (error) {
    console.error('Create document error:', error);
    throw error;
  }
}

export async function getDocuments(options = {}) {
  const { useCache = true, forceRefresh = false } = options;
  const { getAuthHeaders } = useAuth();

  if (useCache && !forceRefresh) {
    const cached = loadDocsCache();
    if (cached) return cached;
  }
  
  try {
    const response = await fetch(`${API_URL}/api/documents`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.detail || `Failed to fetch documents (${response.status})`;
      throw new Error(errorMessage);
    }

    const documents = await response.json();
    saveDocsCache(documents);
    console.log('Loaded documents:', documents);
    return documents;
  } catch (error) {
    console.error('Get documents error:', error);
    throw error;
  }
}

export async function getDocument(documentId, options = {}) {
  const { useCache = true, forceRefresh = false } = options;
  const { getAuthHeaders } = useAuth();

  if (useCache && !forceRefresh) {
    const cached = loadDocCache(documentId);
    if (cached) return cached;
  }
  
  try {
    const response = await fetch(`${API_URL}/api/documents/${documentId}`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.detail || `Failed to fetch document (${response.status})`;
      throw new Error(errorMessage);
    }

    const document = await response.json();
    saveDocCache(document);
    upsertDocListCache(document);
    return document;
  } catch (error) {
    console.error('Get document error:', error);
    throw error;
  }
}

export async function getSharedDocument(documentId) {
  try {
    const response = await fetch(`${API_URL}/api/documents/share/${documentId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch shared document');
    }

    return await response.json();
  } catch (error) {
    console.error('Get shared document error:', error);
    throw error;
  }
}

export async function updateDocument(documentId, updates) {
  const { getAuthHeaders } = useAuth();
  
  try {
    const response = await fetch(`${API_URL}/api/documents/${documentId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error('Failed to update document');
    }

    const updated = await response.json();
    saveDocCache(updated);
    upsertDocListCache(updated);
    return updated;
  } catch (error) {
    console.error('Update document error:', error);
    throw error;
  }
}

export async function deleteDocument(documentId) {
  const { getAuthHeaders } = useAuth();
  
  try {
    const response = await fetch(`${API_URL}/api/documents/${documentId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete document');
    }

    clearDocCache(documentId);
    removeFromDocListCache(documentId);
    return true;
  } catch (error) {
    console.error('Delete document error:', error);
    throw error;
  }
}

// Media API
export async function uploadMedia(file) {
  const { getAuthHeaders } = useAuth();
  
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const headers = getAuthHeaders();
    delete headers['Content-Type']; // Let browser set it with boundary
    
    const response = await fetch(`${API_URL}/api/media`, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to upload media');
    }

    return await response.json();
  } catch (error) {
    console.error('Upload media error:', error);
    throw error;
  }
}

export async function getMediaList() {
  const { getAuthHeaders } = useAuth();
  
  try {
    const response = await fetch(`${API_URL}/api/media`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch media list');
    }

    return await response.json();
  } catch (error) {
    console.error('Get media list error:', error);
    throw error;
  }
}

export async function deleteMedia(mediaId) {
  const { getAuthHeaders } = useAuth();
  
  try {
    const response = await fetch(`${API_URL}/api/media/${mediaId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete media');
    }

    return true;
  } catch (error) {
    console.error('Delete media error:', error);
    throw error;
  }
}

export function getMediaUrl(mediaId) {
  return `${API_URL}/api/media/${mediaId}`;
}

export function getShareUrl(documentId) {
  return `${window.location.origin}/docs/cloud/${documentId}`;
}

export function useCloudStorage() {
  return {
    isCloudMode,
    setCloudMode,
    getCloudMode,
    createDocument,
    getDocuments,
    getDocument,
    getSharedDocument,
    updateDocument,
    deleteDocument,
    uploadMedia,
    getMediaList,
    deleteMedia,
    getMediaUrl,
    getShareUrl,
  };
}
