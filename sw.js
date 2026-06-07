// Service Worker - 缓存音乐文件到本地，减少 CDN 流量
var CACHE = 'jsyl-music-v1';
var COS_HOST = 'jsyl-1440566486.cos.ap-guangzhou.myqcloud.com';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  var url = new URL(e.request.url);
  // 只缓存 COS 上的音乐和歌词文件
  if (url.hostname === COS_HOST && (url.pathname.includes('/music/'))) {
    e.respondWith(
      caches.open(CACHE).then(function(cache) {
        return cache.match(e.request).then(function(cached) {
          var fetched = fetch(e.request).then(function(response) {
            if (response.ok) {
              cache.put(e.request, response.clone());
            }
            return response;
          });
          return cached || fetched;
        });
      })
    );
  }
});
