const CACHE_NAME = 'dialpad-cache-v1';
const urlsToCache = [
  '/your-repo-name/',
  '/your-repo-name/index.html',
  '/your-repo-name/styles.css',
  '/your-repo-name/script.js',
  '/your-repo-name/icon-192x192.png',
  '/your-repo-name/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
