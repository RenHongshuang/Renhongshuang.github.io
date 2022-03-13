/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cd224d18ca7f33a92f0d6ed1881261f1"
  },
  {
    "url": "android/Android.html",
    "revision": "eafeaa5da8c680c87661fc75def56bd1"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.30ef6117.css",
    "revision": "b1b08007737281c764d12cc1850e0c0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.12acd5c7.js",
    "revision": "cb7d2e267e9743ccd956616dda7458d9"
  },
  {
    "url": "assets/js/11.0290dd63.js",
    "revision": "bc193714bb6d7afc7c6564b3c3d7f020"
  },
  {
    "url": "assets/js/12.a5c014a6.js",
    "revision": "74976b191c7fab65ee64426647f35d32"
  },
  {
    "url": "assets/js/13.a53ee717.js",
    "revision": "86096ef55d76536fe5d837a96abd698f"
  },
  {
    "url": "assets/js/14.6581985b.js",
    "revision": "b13ffd7f0a41d19b42a12a434dc04944"
  },
  {
    "url": "assets/js/15.582ceb84.js",
    "revision": "633b4cc040ed5a2bbea05f2453bb832d"
  },
  {
    "url": "assets/js/16.d4e125ad.js",
    "revision": "2aa053dc12ee067144b3425c3e21cd14"
  },
  {
    "url": "assets/js/17.52948aab.js",
    "revision": "0360f94b16b9af73a34bab606344b41c"
  },
  {
    "url": "assets/js/18.0ee6d6b0.js",
    "revision": "7ae951b15aee52c82135e601972d0f7f"
  },
  {
    "url": "assets/js/19.8ec304ad.js",
    "revision": "242ad2bc58a173d8e665e780bc1ddff5"
  },
  {
    "url": "assets/js/5.b46bf118.js",
    "revision": "6834d6e45cc554a64f0b9667539796b9"
  },
  {
    "url": "assets/js/6.ef9947e3.js",
    "revision": "c34d22c95efd218d1383093df69a4d15"
  },
  {
    "url": "assets/js/7.dd431c16.js",
    "revision": "cc4a00ef8e8fc904aad83e2097d83fdc"
  },
  {
    "url": "assets/js/8.dc1ac659.js",
    "revision": "3325625dcba88ea7496f0adf83aeaf61"
  },
  {
    "url": "assets/js/9.9ef03935.js",
    "revision": "5d70e03a1ee36acf28ccad8c2ab339cf"
  },
  {
    "url": "assets/js/app.40b58c94.js",
    "revision": "b01b417cd20c88a3c84e5d9f5637b1e4"
  },
  {
    "url": "assets/js/vendors~docsearch.155b5221.js",
    "revision": "27d325cc87d0478d893a56e40fbc0f35"
  },
  {
    "url": "assets/js/vendors~flowchart.768cdc3c.js",
    "revision": "c50154b7dc95e5ff25a77596c26d46c7"
  },
  {
    "url": "assets/js/vendors~notification.22180db0.js",
    "revision": "556fbc57d25462368af62b14a9a86951"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d1aa77f88bcb57758ab042632b97bb28"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
