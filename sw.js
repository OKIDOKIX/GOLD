const CACHE_NAME = 'okidoki-cache-v1';
const urlsToCache = [
  './',
  'index.html',  // ファイル名をindex.htmlに変更（前のokidoki.htmlをindex.htmlにしたよね）
  'icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
