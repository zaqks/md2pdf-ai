<script setup>
import { ref } from 'vue';
import { Sparkles } from 'lucide-vue-next';

const inputText = ref('');
const isExpanded = ref(false);

const emit = defineEmits(['submit']);

function handleSubmit() {
  if (inputText.value.trim()) {
    emit('submit', inputText.value);
    inputText.value = '';
  }
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
      <input
        v-model="inputText"
        type="text"
        class="ai-input"
        placeholder="Ask AI assistant..."
        @keypress="handleKeyPress"
        @focus="isExpanded = true"
      />
      <button class="ai-button" @click="handleSubmit" :disabled="!inputText.trim()">
        <Sparkles :size="20" />
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
  padding: var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) var(--spacing-l);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: var(--transition);
}

.ai-assistant:hover .ai-container {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
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

@media (max-width: 768px) {
  .ai-assistant {
    bottom: var(--spacing-m);
    right: var(--spacing-m);
    left: var(--spacing-m);
  }

  .ai-container {
    width: 100%;
  }

  .ai-input {
    flex: 1;
    width: auto;
  }

  .ai-assistant.expanded .ai-input {
    width: auto;
  }
}
</style>
