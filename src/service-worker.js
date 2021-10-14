const cacheVersion = "3.9.10-pwa.beta.2";

// importScripts( "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js" );

const staticCacheName = `vkiss-${cacheVersion}`;
const filesToCache = [
  "app.css",
  "app.js",
  "favicon.png",
  "index.html",
  "manifest.json",
  "style.css",
];

// Cache on install
this.addEventListener( "install", event => {
  this.skipWaiting();

  event.waitUntil(
    caches.open( staticCacheName )
      .then( cache => {
        return cache.addAll( filesToCache );
      } )
  );
} );

// Clear cache on activate
this.addEventListener( "activate", event => {
  event.waitUntil(
    caches.keys().then( cacheNames => {
      return Promise.all(
        cacheNames
          .filter( cacheName => ( cacheName.startsWith( "vkiss-" ) ) )
          .filter( cacheName => ( cacheName !== staticCacheName ) )
          .map( cacheName => caches.delete( cacheName ) )
      );
    } )
  );
} );

// Serve from Cache
// this.addEventListener( "fetch", event => {
//   event.respondWith(
//     caches.match( event.request )
//       .then( response => {
//         return response || fetch( event.request );
//       } )
//       .catch( () => {
//         return caches.match( "/offline/index.html" );
//       } )
//   );
// } );
