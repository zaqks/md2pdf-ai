const MEDIA_KEY = 'md2pdf_local_media_v1';

function loadStore() {
  try {
    const raw = localStorage.getItem(MEDIA_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error('Failed to read local media store:', error);
    return [];
  }
}

function saveStore(entries) {
  try {
    localStorage.setItem(MEDIA_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error('Failed to write local media store:', error);
  }
}

function makeId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `media_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export async function addLocalMedia(file) {
  const dataUrl = await readFileAsDataUrl(file);
  const entry = {
    id: makeId(),
    original_filename: file.name,
    mime_type: file.type,
    size: file.size,
    created_at: Date.now(),
    dataUrl,
  };
  const entries = loadStore();
  saveStore([entry, ...entries]);
  return entry;
}

export function getLocalMediaList() {
  return loadStore();
}

export function deleteLocalMedia(mediaId) {
  const entries = loadStore();
  saveStore(entries.filter((item) => String(item.id) !== String(mediaId)));
  return true;
}

export function getLocalMediaUrl(mediaId) {
  const entry = loadStore().find((item) => String(item.id) === String(mediaId));
  return entry ? entry.dataUrl : '';
}
