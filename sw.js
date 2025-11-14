const cacheName = 'gold-calculator-v1';
const assetsToCache = [
  './',
  './index.html',
  'https://fs.noorgram.ir/xen/2021/05/1937_a04f325674750b15e1a00d49222b587f.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
