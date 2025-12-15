// Service Worker for Real World Properties
const CACHE_NAME = "real-world-prop-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css", // Add your CSS file name here if you have one
  "https://cdn-icons-png.flaticon.com/512/609/609803.png"
];

// Install Event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event (Offline Capability)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
