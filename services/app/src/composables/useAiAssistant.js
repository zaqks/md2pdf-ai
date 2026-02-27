import { ref } from 'vue';
import { useWebSocket } from './useWebSocket';

export function useAiAssistant() {
  const wsUrl = 'ws://localhost:8000/ws/llm';
  const isProcessing = ref(false);
  const error = ref(null);
  const previousContent = ref(null);
  
  const { status, connect, send, disconnect } = useWebSocket(wsUrl, {
    timeout: 60000,
    onMessage: (event) => {
      handleMessage(event);
    },
    onError: (err) => {
      error.value = err.message || 'WebSocket error';
      isProcessing.value = false;
    },
    onOpen: () => {
      error.value = null;
    }
  });

  let pendingCallback = null;

  function handleMessage(event) {
    try {
      const response = JSON.parse(event.data);
      
      if (response.type === 'answer') {
        if (pendingCallback) {
          pendingCallback(response.content);
          pendingCallback = null;
        }
        isProcessing.value = false;
        error.value = null;
      } else if (response.type === 'error') {
        error.value = response.message;
        isProcessing.value = false;
        if (pendingCallback) {
          pendingCallback(null);
          pendingCallback = null;
        }
      }
    } catch (err) {
      error.value = 'Failed to parse response';
      isProcessing.value = false;
      if (pendingCallback) {
        pendingCallback(null);
        pendingCallback = null;
      }
    }
  }

  async function askAi(question, currentFile) {
    return new Promise((resolve, reject) => {
      if (isProcessing.value) {
        reject(new Error('Another request is already in progress'));
        return;
      }

      if (status.value !== 'connected') {
        reject(new Error('WebSocket is not connected'));
        return;
      }

      try {
        // Store previous content for undo
        previousContent.value = currentFile;
        
        isProcessing.value = true;
        error.value = null;

        pendingCallback = (content) => {
          if (content) {
            resolve(content);
          } else {
            reject(new Error(error.value || 'Failed to get response'));
          }
        };

        send({
          type: 'question',
          content: question,
          currentFile: currentFile
        });
      } catch (err) {
        isProcessing.value = false;
        error.value = err.message;
        reject(err);
      }
    });
  }

  function undo() {
    const previous = previousContent.value;
    previousContent.value = null;
    return previous;
  }

  function canUndo() {
    return previousContent.value !== null;
  }

  return {
    status,
    isProcessing,
    error,
    connect,
    disconnect,
    askAi,
    undo,
    canUndo
  };
}
