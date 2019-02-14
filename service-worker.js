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
    "revision": "e40430e69b5a30ee087a14bec2e3ccf1"
  },
  {
    "url": "about/index.html",
    "revision": "21e6ffafb985d4885c0bd38deaa84654"
  },
  {
    "url": "about/README2.html",
    "revision": "fa939aec894ec79bfd0dbfb3d1111690"
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
    "url": "assets/js/10.b10c40bf.js",
    "revision": "66b026b1aa77ca2f808002650fbdfeac"
  },
  {
    "url": "assets/js/11.3b92e9b4.js",
    "revision": "d4c544d71d50f23a96b3866f45a1558d"
  },
  {
    "url": "assets/js/12.6df1cfa1.js",
    "revision": "5f8b69bf385e6509c75f1e8ebe775ace"
  },
  {
    "url": "assets/js/13.9cab444c.js",
    "revision": "bd9dcc890549cbaeec276064cdf600b4"
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
    "url": "assets/js/6.2e712560.js",
    "revision": "6c8b00284e07a4a860f01311bfa911f0"
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
    "url": "assets/js/9.e3d32617.js",
    "revision": "bc0df3a9e42a49312adec47f9a4c0d5b"
  },
  {
    "url": "assets/js/app.7a10079e.js",
    "revision": "1253028fe477b2b1d205a7167558827f"
  },
  {
    "url": "index.html",
    "revision": "8fa7b62736e7c81342eb7674f56b58e8"
  },
  {
    "url": "logo.png",
    "revision": "aef3f395999747182d10e89113308c11"
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
    "url": "til/Android/test.html",
    "revision": "1fe9ef4f8bfc6c0d019cac2fd22430d2"
  },
  {
    "url": "til/Flutter/two.html",
    "revision": "ab0f0610c8f54e7fa8c8dce6471187f8"
  },
  {
    "url": "til/index.html",
    "revision": "045a5a20023669a292ef8fd689bdc68d"
  },
  {
    "url": "til/kotlin/one.html",
    "revision": "476224a7ce247dc0d036533c856f166b"
  },
  {
    "url": "til/kotlin/three.html",
    "revision": "8849cc470f7de704c911a7c3d9d7ecd6"
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
