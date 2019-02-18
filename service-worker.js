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
    "revision": "180a07b77475cd2b1cd8940d59a47fb5"
  },
  {
    "url": "about/index.html",
    "revision": "5da8f1da84b8e43a3eefb57fe40f6b4b"
  },
  {
    "url": "about/README2.html",
    "revision": "914054c208fa9a58b95735e429289441"
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
    "url": "assets/js/10.a24bc80e.js",
    "revision": "1d28e33cd73cf3713273453f3f817737"
  },
  {
    "url": "assets/js/11.b89b9040.js",
    "revision": "cd16c520d03d97c7cd26b94d3da8ad0f"
  },
  {
    "url": "assets/js/12.bb9341e2.js",
    "revision": "bb67f21f9b0bba2211395152e17ba83e"
  },
  {
    "url": "assets/js/13.2c129031.js",
    "revision": "f63223d4d4ac772b3ee1ac2bfc83286c"
  },
  {
    "url": "assets/js/14.6ffe39ba.js",
    "revision": "7c0a1ca24a4095895d295432e463af2f"
  },
  {
    "url": "assets/js/2.a4d7ab87.js",
    "revision": "bf7936d59094eaa96e0fb61c7a1a263f"
  },
  {
    "url": "assets/js/3.47425ff1.js",
    "revision": "3eb9e7012625be4ff0a6a5c0e50f8008"
  },
  {
    "url": "assets/js/4.799b7197.js",
    "revision": "99048a45506669b272a306530f4465f6"
  },
  {
    "url": "assets/js/5.ad7a2312.js",
    "revision": "7f8bd3400e1882077a9af6e1848433d2"
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
    "url": "assets/js/app.5af079b7.js",
    "revision": "e5d05ade8f41e4c35c0860c513ec81c5"
  },
  {
    "url": "index.html",
    "revision": "16ae5c792b0e524a5b472c1fa56c1e93"
  },
  {
    "url": "logo.png",
    "revision": "aef3f395999747182d10e89113308c11"
  },
  {
    "url": "project/index.html",
    "revision": "386882b3c324445c5be602a836cec043"
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
    "revision": "14892c48ca3e4e475b2dc3cd257af55f"
  },
  {
    "url": "til/Flutter/플러터소개.html",
    "revision": "924cf12be7c7f14e5717525336af971a"
  },
  {
    "url": "til/index.html",
    "revision": "3157945f2c7b6a0536cdde88c47661a5"
  },
  {
    "url": "til/Kotlin/코틀린소개.html",
    "revision": "95bbccf4df2ac6323a1207a0af0cb58f"
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
