<script setup>
import { ref, computed } from 'vue';
import { Sparkles, Undo2 } from 'lucide-vue-next';

const props = defineProps({
  status: {
    type: String,
    default: 'disconnected'
  },
  isProcessing: {
    type: Boolean,
    default: false
  },
  canUndo: {
    type: Boolean,
    default: false
  }
});

const inputText = ref('');
const isExpanded = ref(false);

const emit = defineEmits(['submit', 'undo']);

const statusColor = computed(() => {
  switch (props.status) {
    case 'connected':
      return '#4caf50'; // green
    case 'connecting':
      return '#ff9800'; // orange
    case 'error':
    case 'disconnected':
      return '#f44336'; // red
    default:
      return '#757575'; // grey
  }
});

const statusTitle = computed(() => {
  switch (props.status) {
    case 'connected':
      return 'Connected';
    case 'connecting':
      return 'Connecting...';
    case 'error':
      return 'Connection error';
    case 'disconnected':
      return 'Disconnected';
    default:
      return 'Unknown';
  }
});

function handleSubmit() {
  if (inputText.value.trim() && !props.isProcessing) {
    emit('submit', inputText.value);
    inputText.value = '';
  }
}

function handleUndo() {
  emit('undo');
}

function handleKeyPress(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    handleSubmit();
  }
}

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
  if (isExpanded.value) {
    // Focus input when expanded
    setTimeout(() => {
      document.querySelector('.ai-input')?.focus();
    }, 100);
  }
}
</script>

<template>
  <div class="ai-assistant" :class="{ expanded: isExpanded }">
    <div class="ai-container">
      <div 
        class="status-indicator" 
        :style="{ backgroundColor: statusColor }"
        :title="statusTitle"
      />
      <input
        v-model="inputText"
        type="text"
        class="ai-input"
        :placeholder="isProcessing ? 'Processing...' : 'Ask AI assistant...'"
        @keypress="handleKeyPress"
        @focus="isExpanded = true"
        :disabled="isProcessing || status !== 'connected'"
      />
      <button 
        v-if="canUndo"
        class="ai-button undo-button" 
        @click="handleUndo"
        title="Undo last AI edit"
      >
        <Undo2 :size="20" />
      </button>
      <button 
        class="ai-button" 
        @click="handleSubmit" 
        :disabled="!inputText.trim() || isProcessing || status !== 'connected'"
      >
        <Sparkles :size="20" :class="{ spinning: isProcessing }" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.ai-assistant {
  position: fixed;
  bottom: var(--spacing-l);
  right: var(--spacing-l);
  z-index: 1000;
  transition: var(--transition);
}

.ai-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  background-color: var(--color-background);
  border: 2px solid var(--color-primary);
  border-radius: 50px;
  padding: var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) var(--spacing-m);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: var(--transition);
}

.ai-assistant:hover .ai-container {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 4px currentColor;
}

.ai-input {
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--font-size-s);
  color: var(--color-text-primary);
  width: 200px;
  transition: width 0.3s ease;
}

.ai-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.ai-assistant.expanded .ai-input {
  width: 300px;
}

.ai-input::placeholder {
  color: var(--color-text-secondary);
}

.ai-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
}

.ai-button:hover:not(:disabled) {
  background-color: var(--color-hover);
  transform: scale(1.05);
}

.ai-button:active:not(:disabled) {
  transform: scale(0.95);
}

.ai-button:disabled {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  cursor: not-allowed;
}

.undo-button {
  background-color: var(--color-secondary, #666);
}

.undo-button:hover:not(:disabled) {
  background-color: var(--color-secondary-hover, #777);
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .ai-assistant {
    bottom: var(--spacing-m);
    right: var(--spacing-m);
    left: var(--spacing-m);
  }

  .ai-container {
    width: 100%;
    padding: var(--spacing-s) var(--spacing-s) var(--spacing-s) var(--spacing-m);
  }

  .ai-input {
    flex: 1;
    width: auto;
    font-size: var(--font-size-m);
  }

  .ai-assistant.expanded .ai-input {
    width: auto;
  }

  .ai-button {
    width: 44px;
    height: 44px;
  }

  .status-indicator {
    width: 12px;
    height: 12px;
  }
}
</style>
