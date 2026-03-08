<script setup>
import { ref, watch } from 'vue';
import { Check, X, Pencil, Cloud, CloudOff, User, LogOut, Share2 } from 'lucide-vue-next';

const props = defineProps({
  fileName: {
    type: String,
    required: true
  },
  isCloudMode: {
    type: Boolean,
    default: false
  },
  isAuthenticated: {
    type: Boolean,
    default: false
  },
  user: {
    type: Object,
    default: null
  },
  canShare: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['rename', 'toggleCloudMode', 'login', 'logout', 'share']);

const isEditing = ref(false);
const editedName = ref(props.fileName);

watch(() => props.fileName, (newName) => {
  editedName.value = newName;
  isEditing.value = false;
});

function startEditing() {
  isEditing.value = true;
  editedName.value = props.fileName;
}

function confirmRename() {
  if (editedName.value.trim() && editedName.value !== props.fileName) {
    emit('rename', editedName.value.trim());
  }
  isEditing.value = false;
}

function cancelRename() {
  editedName.value = props.fileName;
  isEditing.value = false;
}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    confirmRename();
  } else if (event.key === 'Escape') {
    cancelRename();
  }
}
</script>

<template>
  <div class="app-bar">
    <div class="left-section">
      <button @click="emit('toggleCloudMode')" class="mode-button" :class="{ active: isCloudMode }"
        :title="isCloudMode ? 'Switch to Offline Mode' : 'Switch to Cloud Mode'">
        <Cloud v-if="isCloudMode" :size="18" />
        <CloudOff v-else :size="18" />
        <span class="mode-text">{{ isCloudMode ? 'Cloud' : 'Offline' }}</span>
      </button>
    </div>

    <div class="file-name-container">
      <input v-if="isEditing" v-model="editedName" @keydown="handleKeydown" @blur="cancelRename" class="file-name-input"
        type="text" autofocus />
      <span v-else class="file-name">{{ fileName }}</span>

      <div v-if="isEditing" class="edit-actions">
        <button @mousedown.prevent="confirmRename" class="icon-button confirm" title="Confirm">
          <Check :size="16" />
        </button>
        <button @mousedown.prevent="cancelRename" class="icon-button cancel" title="Cancel">
          <X :size="16" />
        </button>
      </div>
      <button v-else @click="startEditing" class="icon-button edit" title="Rename">
        <Pencil :size="16" />
      </button>
    </div>

    <div class="right-section">
      <button v-if="isCloudMode && canShare" @click="emit('share')" class="icon-button share" title="Share Document">
        <Share2 :size="18" />
      </button>

      <div v-if="isCloudMode" class="auth-section">
        <template v-if="isAuthenticated">
          <div class="user-info">
            <User :size="16" />
            <span class="username">{{ user?.username }}</span>
          </div>
          <button @click="emit('logout')" class="icon-button logout" title="Logout">
            <LogOut :size="18" />
          </button>
        </template>
        <button v-else @click="emit('login')" class="login-button">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-bar {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-m) var(--spacing-l);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  gap: var(--spacing-m);
}

.left-section,
.right-section {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  min-width: 150px;
}

.right-section {
  justify-content: flex-end;
}

.mode-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  padding: var(--spacing-s) var(--spacing-m);
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text-secondary);
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
  font-size: var(--font-size-s);
  font-weight: 500;
}

.mode-button:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.mode-button.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.mode-text {
  font-size: var(--font-size-s);
}

.file-name-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  flex: 1;
  justify-content: center;
}

.file-name {
  font-size: var(--font-size-m);
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.5px;
}

.file-name-input {
  font-size: var(--font-size-m);
  font-weight: 600;
  padding: var(--spacing-s);
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  outline: none;
  min-width: 200px;
  font-family: var(--font-family);
}

.edit-actions {
  display: flex;
  gap: var(--spacing-s);
}

.icon-button {
  padding: var(--spacing-xs);
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: var(--transition);
  color: var(--color-text-secondary);
}

.icon-button:hover {
  background-color: var(--color-surface);
}

.icon-button.edit:hover {
  color: var(--color-primary);
}

.icon-button.share:hover {
  color: var(--color-primary);
}

.icon-button.confirm {
  color: #4caf50;
}

.icon-button.confirm:hover {
  background-color: rgba(76, 175, 80, 0.1);
}

.icon-button.cancel {
  color: #f44336;
}

.icon-button.cancel:hover {
  background-color: rgba(244, 67, 54, 0.1);
}

.auth-section {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  padding: var(--spacing-s) var(--spacing-m);
  background-color: var(--color-surface);
  border-radius: 6px;
  font-size: var(--font-size-s);
  color: var(--color-text-secondary);
}

.username {
  font-weight: 500;
}

.login-button {
  padding: var(--spacing-s) var(--spacing-m);
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
  font-size: var(--font-size-s);
  font-weight: 500;
}

.login-button:hover {
  background-color: var(--color-primary-dark);
}

.icon-button.logout:hover {
  color: #f44336;
}

@media (max-width: 768px) {
  .app-bar {
    padding: var(--spacing-s) var(--spacing-m);
    padding-left: 64px;
    /* Account for hamburger menu */
  }

  .mode-text {
    display: none;
  }

  .username {
    display: none;
  }

  .file-name {
    font-size: var(--font-size-s);
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .file-name-input {
    min-width: 120px;
    font-size: var(--font-size-s);
  }

  .icon-button {
    padding: var(--spacing-s);
  }

  .left-section,
  .right-section {
    min-width: auto;
  }
}
</style>
