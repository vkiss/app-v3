const staticDevCoffee = "vkiss-v1";
const assets = [
  "/",
  "/index.html",
  "/first-paint.css",
  "/style.css",
  "/app.js"
];

self.addEventListener( "install", installEvent => {
  installEvent.waitUntil(
    caches.open( staticDevCoffee ).then( cache => {
      cache.addAll( assets );
    } )
  );
} );

self.addEventListener( "activate", event => {
  console.log( "Activate!" );
} );

self.addEventListener( "fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match( fetchEvent.request ).then( res => {
      return res || fetch( fetchEvent.request );
    } )
  );
} );
