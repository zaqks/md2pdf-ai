import { ref } from 'vue';
import { useAuth } from './useAuth.js';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

// Cloud mode state
const isCloudMode = ref(localStorage.getItem('cloud_mode') === 'true');

// Set cloud mode
export function setCloudMode(enabled) {
  isCloudMode.value = enabled;
  localStorage.setItem('cloud_mode', enabled.toString());
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

    return await response.json();
  } catch (error) {
    console.error('Create document error:', error);
    throw error;
  }
}

export async function getDocuments() {
  const { getAuthHeaders } = useAuth();
  
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
    console.log('Loaded documents:', documents);
    return documents;
  } catch (error) {
    console.error('Get documents error:', error);
    throw error;
  }
}

export async function getDocument(documentId) {
  const { getAuthHeaders } = useAuth();
  
  try {
    const response = await fetch(`${API_URL}/api/documents/${documentId}`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.detail || `Failed to fetch document (${response.status})`;
      throw new Error(errorMessage);
    }

    return await response.json();
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

    return await response.json();
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
