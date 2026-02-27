import { ref, onUnmounted } from 'vue';

export function useWebSocket(url, options = {}) {
  const { 
    timeout = 60000,
    onMessage = () => {},
    onError = () => {},
    onOpen = () => {},
    onClose = () => {}
  } = options;

  const ws = ref(null);
  const status = ref('disconnected'); // 'connecting', 'connected', 'disconnected', 'error'
  const isConnected = ref(false);
  let reconnectTimeout = null;
  let messageTimeout = null;

  function connect() {
    if (ws.value?.readyState === WebSocket.OPEN || 
        ws.value?.readyState === WebSocket.CONNECTING) {
      return;
    }

    status.value = 'connecting';
    isConnected.value = false;

    try {
      ws.value = new WebSocket(url);

      ws.value.onopen = () => {
        status.value = 'connected';
        isConnected.value = true;
        onOpen();
      };

      ws.value.onmessage = (event) => {
        clearTimeout(messageTimeout);
        onMessage(event);
      };

      ws.value.onerror = (error) => {
        status.value = 'error';
        isConnected.value = false;
        onError(error);
      };

      ws.value.onclose = () => {
        status.value = 'disconnected';
        isConnected.value = false;
        onClose();
        
        // Auto reconnect after 3 seconds
        clearTimeout(reconnectTimeout);
        reconnectTimeout = setTimeout(() => {
          if (status.value === 'disconnected') {
            connect();
          }
        }, 3000);
      };
    } catch (error) {
      status.value = 'error';
      isConnected.value = false;
      onError(error);
    }
  }

  function send(data) {
    if (ws.value?.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket is not connected');
    }

    const message = typeof data === 'string' ? data : JSON.stringify(data);
    ws.value.send(message);

    // Set timeout for response
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => {
      status.value = 'error';
      onError(new Error('Request timeout'));
    }, timeout);
  }

  function disconnect() {
    clearTimeout(reconnectTimeout);
    clearTimeout(messageTimeout);
    
    if (ws.value) {
      ws.value.close();
      ws.value = null;
    }
    
    status.value = 'disconnected';
    isConnected.value = false;
  }

  // Auto cleanup on component unmount
  onUnmounted(() => {
    disconnect();
  });

  return {
    ws,
    status,
    isConnected,
    connect,
    send,
    disconnect
  };
}
