const CACHE_NAME = 'amittoolsx-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/privacy.html',
  '/tools.html',
  '/pdf-editor.html',
  '/style.css',
  '/script.js',
  '/tools.js',
  '/pdf-editor.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
