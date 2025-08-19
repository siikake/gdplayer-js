self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  console.log('Service Worker active');
});
self.addEventListener('fetch', e => {
  // opsional: cache untuk offline
});
