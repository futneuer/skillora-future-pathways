
// This is an improved service worker for Skillora PWA with better HTTPS handling

const CACHE_NAME = 'skillora-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/static/css/main.css',
  '/static/js/main.js'
];

// Modified HTTPS handling for ply.gg domains
self.addEventListener('fetch', event => {
  // Special handling for ply.gg domains - don't force HTTPS
  const url = new URL(event.request.url);
  const isPlyGg = url.host.includes('.ply.gg');
  const isHTTP = url.protocol === 'http:';
  const canBeHTTPS = !url.host.includes('localhost') && 
                     !url.host.includes('127.0.0.1') && 
                     !isPlyGg;
  
  if (isHTTP && canBeHTTPS) {
    // Convert HTTP to HTTPS only for non-ply.gg domains
    url.protocol = 'https:';
    event.respondWith(fetch(new Request(url, event.request)));
    return;
  }
  
  // Standard cache strategy
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if available
        if (response) {
          return response;
        }
        
        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response because it's a one-time use stream
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(error => {
            console.log('Fetch failed; returning offline page instead.', error);
            // Serve from cache as fallback for network errors
            return caches.match('/index.html');
          });
      })
  );
});

// Install service worker and cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
  // Force the waiting service worker to become active
  self.skipWaiting();
});

// Clean up old caches when a new service worker is activated
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients as soon as it's activated
      return self.clients.claim();
    })
  );
});
