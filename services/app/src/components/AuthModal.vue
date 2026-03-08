<template>
  <div class="auth-modal-overlay" @click.self="$emit('close')">
    <div class="auth-modal">
      <div class="auth-header">
        <h2>{{ isLogin ? 'Login' : 'Sign Up' }}</h2>
        <button @click="$emit('close')" class="close-btn">&times;</button>
      </div>
      
      <div class="auth-body">
        <div v-if="error" class="error-message">{{ error }}</div>
        
        <form @submit.prevent="handleSubmit">
          <div v-if="!isLogin" class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="your@email.com"
            />
          </div>
          
          <div class="form-group">
            <label for="username">Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              placeholder="username"
            />
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up') }}
          </button>
        </form>
        
        <div class="auth-footer">
          <button @click="toggleMode" class="toggle-btn">
            {{ isLogin ? "Don't have an account? Sign up" : "Already have an account? Login" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth.js';

const emit = defineEmits(['close', 'success']);

const { login, register } = useAuth();

const isLogin = ref(true);
const username = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

function toggleMode() {
  isLogin.value = !isLogin.value;
  error.value = '';
}

async function handleSubmit() {
  loading.value = true;
  error.value = '';
  
  try {
    let result;
    if (isLogin.value) {
      result = await login(username.value, password.value);
    } else {
      result = await register(username.value, email.value, password.value);
    }
    
    if (result.success) {
      emit('success', result.user);
      emit('close');
    } else {
      error.value = result.error;
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.auth-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.auth-modal {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.auth-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.auth-header h2 {
  margin: 0;
  font-size: 24px;
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

.auth-body {
  padding: 20px;
}

.error-message {
  background: #fee2e2;
  color: #991b1b;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  color: #374151;
  font-weight: 500;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
}

.submit-btn {
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

.submit-btn:hover:not(:disabled) {
  background: #2563eb;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-footer {
  margin-top: 16px;
  text-align: center;
}

.toggle-btn {
  background: none;
  border: none;
  color: #3b82f6;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
}

.toggle-btn:hover {
  color: #2563eb;
}
</style>
