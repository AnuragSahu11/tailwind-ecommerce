const CACHE_NAME = "demo/v1";

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const cloneData = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });
        return res;
      })
      .catch(() => {
        return caches.match(e.request).then((file) => file);
      })
  );
});
