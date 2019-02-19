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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "351e32f85323fa8a81b57b34867136ab"
  },
  {
    "url": "about/index.html",
    "revision": "ea877e49771a67560b0f65201a659299"
  },
  {
    "url": "about/README2.html",
    "revision": "f3ab9f814e860073430ca166b3edcb52"
  },
  {
    "url": "assets/css/0.styles.f7eec829.css",
    "revision": "0d98612904e4a2fe820b958312c3a419"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.85e8e6ae.js",
    "revision": "d4685c35ed5e50ec54dc8763a3ccbfdc"
  },
  {
    "url": "assets/js/11.74679361.js",
    "revision": "8f4b94ddfc16e347cbb9e71d1d98a2b4"
  },
  {
    "url": "assets/js/12.aa4e7727.js",
    "revision": "39807f779e0c2db39725bcb207ebdeaa"
  },
  {
    "url": "assets/js/13.c743e43b.js",
    "revision": "8baac6939ce5896a9a2f93a28dd2112d"
  },
  {
    "url": "assets/js/14.61a2b826.js",
    "revision": "076505914113e9991071dc13eb8df76a"
  },
  {
    "url": "assets/js/15.3f7193b2.js",
    "revision": "6d29e8d623169786b6314c7ebc964aac"
  },
  {
    "url": "assets/js/16.d70cef26.js",
    "revision": "46cbfda30452d82da19d50eba3e61913"
  },
  {
    "url": "assets/js/2.83252fb9.js",
    "revision": "465ece5b9e4ae2e802e1e47cd579759b"
  },
  {
    "url": "assets/js/3.1f006ad4.js",
    "revision": "3eb51708af90cf1ad2bc40cc8cdae20d"
  },
  {
    "url": "assets/js/4.8df43885.js",
    "revision": "ebe0c1509ddf69ec6bce00e5fcbb5bd1"
  },
  {
    "url": "assets/js/5.f0e9f241.js",
    "revision": "6a33d8e5074096ee85ecafc133aa1fc5"
  },
  {
    "url": "assets/js/6.960a13c6.js",
    "revision": "ca25c00f81cb29b77bb82354b040b23c"
  },
  {
    "url": "assets/js/7.0be1c679.js",
    "revision": "637aa4c21f6d3fbcc04aeda50cdfa66f"
  },
  {
    "url": "assets/js/8.4a97f0e9.js",
    "revision": "c2aa86b5e5ded4d19357e8f06b562008"
  },
  {
    "url": "assets/js/9.131f18a9.js",
    "revision": "d8fa85c923ec321ce7a91d861eaecfd6"
  },
  {
    "url": "assets/js/app.9ace3b44.js",
    "revision": "9a961900b6a9c54a5c491cf89049f7fc"
  },
  {
    "url": "index.html",
    "revision": "566e641940bb0c60968a41f1881492a1"
  },
  {
    "url": "logo.png",
    "revision": "aef3f395999747182d10e89113308c11"
  },
  {
    "url": "project/index.html",
    "revision": "5dd1d2a5b19dd137bda0f6a4aedd1a03"
  },
  {
    "url": "project3.png",
    "revision": "befe023c186fe3b559a55a780d86a3f9"
  },
  {
    "url": "project33.png",
    "revision": "39454da8fe46367616136057aec4baed"
  },
  {
    "url": "project4.png",
    "revision": "0f8b646e3ecc3bc4068f93a4f6e67939"
  },
  {
    "url": "project5.png",
    "revision": "6e494e924b4b9a7e050f8813282fb91f"
  },
  {
    "url": "project6.png",
    "revision": "ebc1d4cc061dde045a6cf9a5ed9e6f5a"
  },
  {
    "url": "til/Android/안드로이드이야기.html",
    "revision": "a56ca5a0470fb73d94813bc446c226e8"
  },
  {
    "url": "til/Flutter/1.플러터소개.html",
    "revision": "ebabb663f3dea935b4563fd3ebc3d272"
  },
  {
    "url": "til/Flutter/2.크로스플랫폼비교.html",
    "revision": "262e75e3027b4be864c57ac9064c1dfd"
  },
  {
    "url": "til/Flutter/3.왜다트를사용할까.html",
    "revision": "0c7b71afdbb1b9656fe6aa8d09dcdbf3"
  },
  {
    "url": "til/index.html",
    "revision": "82db56f31af7b595e12122a1b94cb8b3"
  },
  {
    "url": "til/Kotlin/코틀린소개.html",
    "revision": "b30d59bfec69a443d2bb58122d08a478"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
