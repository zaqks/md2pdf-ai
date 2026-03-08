import { ref } from 'vue';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

// Auth state
const user = ref(null);
const token = ref(localStorage.getItem('auth_token') || null);
const isAuthenticated = ref(!!token.value);

// Set token and save to localStorage
function setAuthToken(newToken) {
  token.value = newToken;
  localStorage.setItem('auth_token', newToken);
  isAuthenticated.value = true;
}

// Clear token
function clearAuthToken() {
  token.value = null;
  user.value = null;
  localStorage.removeItem('auth_token');
  isAuthenticated.value = false;
}

// Get headers with auth token
function getAuthHeaders() {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token.value) {
    headers['Authorization'] = `Bearer ${token.value}`;
  }
  
  return headers;
}

// Get or create anonymous user
export async function getOrCreateUser() {
  try {
    const response = await fetch(`${API_URL}/api/auth/get-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to get user token');
    }

    const data = await response.json();
    setAuthToken(data.access_token);
    user.value = data.user;
    
    return { success: true, user: data.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Logout user
export function logout() {
  clearAuthToken();
}

// Get current user
export async function getCurrentUser() {
  if (!token.value) {
    return { success: false, error: 'No token found' };
  }

  try {
    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      clearAuthToken();
      throw new Error('Failed to get user info');
    }

    const data = await response.json();
    user.value = data;
    
    return { success: true, user: data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Export auth state
export function useAuth() {
  return {
    user,
    token,
    isAuthenticated,
    getOrCreateUser,
    logout,
    getCurrentUser,
    getAuthHeaders,
  };
}
