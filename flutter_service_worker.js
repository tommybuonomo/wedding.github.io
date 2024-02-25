'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1122071db447d7e012c7bd538b0af2a5",
"index.html": "49e4d75ec604fdb8f69faed192c807bc",
"/": "49e4d75ec604fdb8f69faed192c807bc",
"main.dart.js": "e75be5fd22388582de45f8f921bb34f5",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "bcc215529a97c0896f3a8e3eb339e8b9",
"icons/Icon-1920.webp": "624502c902d3ecf30c2f489b03a7b05a",
"icons/Icon-192.jpg": "3d399a4204b34a9508c6ed0645ca9ed9",
"icons/Icon-maskable-192.jpg": "3d399a4204b34a9508c6ed0645ca9ed9",
"icons/Icon-maskable-512.jpg": "a6e12a26909251380ae23822ea917fe9",
"icons/Icon-512.jpg": "5aeb5b2faaa9974d5febb0b9c4dc751a",
"manifest.json": "f5fd52ab608b3e995fa0a945d04917f9",
"assets/AssetManifest.json": "bac47a45d6675bcce36321ac3a48a340",
"assets/NOTICES": "e98fb7e71c7454cc517ba22e2655c3cc",
"assets/FontManifest.json": "5cf8278ca31b034f27c0cdb0f94b2e93",
"assets/AssetManifest.bin.json": "29e98225a595994135a8b2e2b3584267",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "e46986464f17632843980fff165f4d21",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/ic_diner.webp": "be50bad62cce044ee7105f5d5e0dfa0f",
"assets/assets/images/a_back_5.webp": "918dbdbb7a1a2480cacf3c9b8063c842",
"assets/assets/images/ic_camera.webp": "c124f3a2c64b5a05c316887194df7b58",
"assets/assets/images/ic_music.webp": "b0ef6d547b02329d21cf15bc6c4912d6",
"assets/assets/images/save_the_date_background.webp": "0dc89d62ec16397829a8c4f23efe3534",
"assets/assets/images/a_back_3.webp": "bc08b257650e4d8f6d9ccab60afe66ae",
"assets/assets/images/announcement_card.png": "9b5aaf317241093ea129e91cc3617f32",
"assets/assets/images/a_back_4.mp4": "ebde7e50d462e0badcda1b7f6c6d8bb8",
"assets/assets/images/ic_brunch.webp": "1f4ed64cfe99f5ff4bd1e8ee5c322803",
"assets/assets/images/sound_off.png": "69248155dff6c12086e368883484d625",
"assets/assets/images/a_back_2.webp": "764ddf808d05f3cea98718e404199aab",
"assets/assets/images/ic_ceremony.webp": "a90f0d1f936f85b75a3823058546e372",
"assets/assets/images/date_2024.png": "75ab8024b12fa713a37b5bc92c9e7360",
"assets/assets/images/logo_wedding.png": "632816744e9096b1e38f417738f3a27c",
"assets/assets/images/a_back_1.webp": "27eed9373f62023fb2dd760bcabce0f7",
"assets/assets/images/date_juin.png": "41a915cdb99ca77a6b3e1e68830920a4",
"assets/assets/images/save_the_date_background_portrait.jpg": "05c3afab74db7b05c71b89a3d2b43f17",
"assets/assets/images/date_26.png": "e5a8cbb14f4251dbdb46d2cc529feb33",
"assets/assets/images/swipe_up.png": "a4996195dbe3f0913ab01e38bb0f1858",
"assets/assets/images/logo_wedding_low.png": "4cd743b405036d5d6891023733706d2d",
"assets/assets/images/ic_champagne.webp": "41ada9c1491bc7b7bceef8eb06b4afc6",
"assets/assets/images/play_button.png": "c5b7475526212b778211c2387839d910",
"assets/assets/images/announcement_background.png": "274c04b1a7a224e86ad50b47610cf444",
"assets/assets/images/arrow_down.png": "9de9ca515d9659e9553721f31c41e475",
"assets/assets/images/sound_on.png": "28f9a088a4a5fabdc5ff2540bcb24dd0",
"assets/assets/animation/savethedate.riv": "cfedbe45356b0a0c9d61f9609108834a",
"assets/assets/audio/knocking_blackwall.mp3": "3088c124e80d9fb773e34f194515f98f",
"assets/assets/audio/knockin_announcement.mp3": "f7bb42a79d8d204d41f7932413d1eaa5",
"assets/assets/fonts/caramello/caramello.otf": "8dd7742892d56a27fadc837cc6d6eebf",
"assets/assets/fonts/butler_stencil/Butler_Black_Stencil.otf": "db9c3d65238e0312344581aa8eb05d63",
"assets/assets/fonts/butler_stencil/Butler_Bold_Stencil.otf": "df05d98bce367c49e95025805de92b11",
"assets/assets/fonts/butler_stencil/Butler_Ultra_Light_Stencil.otf": "3c6bc306814a2c1a5ce32f483af531fd",
"assets/assets/fonts/butler_stencil/Butler_Medium_Stencil.otf": "9427fd49dcc59ced2270f88f4603afeb",
"assets/assets/fonts/butler_stencil/Butler_Light_Stencil.otf": "b1e23ac0294eefe9e796fba096044bb2",
"assets/assets/fonts/butler_stencil/Butler_ExtraBold_Stencil.otf": "873b3ad238620f0dd89ebe0e90c23fa8",
"assets/assets/fonts/butler_stencil/Butler_Regular_Stencil.otf": "85bb8569f2ba3701679a37c9b5072842",
"assets/assets/fonts/alice/Alice_Regular.ttf": "c177c5a41939595f514cbaad18b1e439",
"assets/assets/fonts/butler/Butler_Light.otf": "52fed2f7480e0b9b14466419f8e8e643",
"assets/assets/fonts/butler/Butler_Regular.otf": "e3ac9b9aa6b9b06cc7a503f84d3f969b",
"assets/assets/fonts/butler/Butler_ExtraBold.otf": "274d8d656e5fd8098cef78263a963382",
"assets/assets/fonts/butler/Butler_Ultra_Light.otf": "5e5a3d81620e9f93e5b1301f3ceef24d",
"assets/assets/fonts/butler/Butler_Medium.otf": "76c6167062d0276503fcd16081f1c7eb",
"assets/assets/fonts/butler/Butler_Bold.otf": "b760132c9f259d160f67c98f7e70f880",
"assets/assets/fonts/butler/Butler_Black.otf": "9496f16d0c5e1b4c90a3211625431aed",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
