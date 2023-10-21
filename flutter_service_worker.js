'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1122071db447d7e012c7bd538b0af2a5",
"index.html": "b546f5f473dc536e0cf6ddd6b5c17f65",
"/": "b546f5f473dc536e0cf6ddd6b5c17f65",
"main.dart.js": "85e60fa352e79a78c008e98fe1b135ac",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "bcc215529a97c0896f3a8e3eb339e8b9",
"icons/Icon-192.png": "0b9dadab53b68a56e65f535136218776",
"icons/Icon-maskable-192.png": "0b9dadab53b68a56e65f535136218776",
"icons/Icon-maskable-512.png": "59f2cf511915587858fefc288929cbe0",
"icons/Icon-512.png": "59f2cf511915587858fefc288929cbe0",
"manifest.json": "a289997f9530bd0c54dceda5851ca66d",
"assets/AssetManifest.json": "ea2d2a030b08a41b6d27e110d1b5c4e7",
"assets/NOTICES": "a9cd396359084bcd100905501ff66e6c",
"assets/FontManifest.json": "ef34a722aa8838042fb466647648c633",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6084a8686795720bbc88db050d22602f",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/save_the_date_background.webp": "0dc89d62ec16397829a8c4f23efe3534",
"assets/assets/images/sound_off.png": "69248155dff6c12086e368883484d625",
"assets/assets/images/save_the_date_background_portrait.jpg": "05c3afab74db7b05c71b89a3d2b43f17",
"assets/assets/images/play_button.png": "c5b7475526212b778211c2387839d910",
"assets/assets/images/sound_on.png": "28f9a088a4a5fabdc5ff2540bcb24dd0",
"assets/assets/animation/savethedate.riv": "cfedbe45356b0a0c9d61f9609108834a",
"assets/assets/audio/knocking_blackwall.mp3": "9f4ffc38bfe05681906d65d8f6bdf2d4",
"assets/assets/fonts/caramello/caramello.otf": "8dd7742892d56a27fadc837cc6d6eebf",
"assets/assets/fonts/butler_stencil/Butler_Black_Stencil.otf": "db9c3d65238e0312344581aa8eb05d63",
"assets/assets/fonts/butler_stencil/Butler_Bold_Stencil.otf": "df05d98bce367c49e95025805de92b11",
"assets/assets/fonts/butler_stencil/Butler_Medium_Stencil.otf": "9427fd49dcc59ced2270f88f4603afeb",
"assets/assets/fonts/butler_stencil/Butler_Light_Stencil.otf": "b1e23ac0294eefe9e796fba096044bb2",
"assets/assets/fonts/butler_stencil/Butler_ExtraBold_Stencil.otf": "873b3ad238620f0dd89ebe0e90c23fa8",
"assets/assets/fonts/butler_stencil/Butler_Regular_Stencil.otf": "85bb8569f2ba3701679a37c9b5072842",
"assets/assets/fonts/butler/Butler_Light.otf": "52fed2f7480e0b9b14466419f8e8e643",
"assets/assets/fonts/butler/Butler_Regular.otf": "e3ac9b9aa6b9b06cc7a503f84d3f969b",
"assets/assets/fonts/butler/Butler_ExtraBold.otf": "274d8d656e5fd8098cef78263a963382",
"assets/assets/fonts/butler/Butler_Medium.otf": "76c6167062d0276503fcd16081f1c7eb",
"assets/assets/fonts/butler/Butler_Bold.otf": "b760132c9f259d160f67c98f7e70f880",
"assets/assets/fonts/butler/Butler_Black.otf": "9496f16d0c5e1b4c90a3211625431aed",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
