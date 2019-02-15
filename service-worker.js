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
    "revision": "c3167b14fcf6a870953563297a5e4d82"
  },
  {
    "url": "about/index.html",
    "revision": "f012fd685c69b2a8aa18ba76ff9f5512"
  },
  {
    "url": "about/README2.html",
    "revision": "72b7daa02cc1e4734417e4202fb08e04"
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
    "url": "assets/js/10.3cdbe20f.js",
    "revision": "8546d4a0b18b2cfd7858b2d2f6aa9438"
  },
  {
    "url": "assets/js/11.7429a38d.js",
    "revision": "e2bdfedab87efba2d54c8d802f2bfd2b"
  },
  {
    "url": "assets/js/12.7886acc4.js",
    "revision": "3b1f185b333ebc13edd1ea5c97a07336"
  },
  {
    "url": "assets/js/13.f82cd953.js",
    "revision": "54e769d69d3080c6e8db770bb021ef1c"
  },
  {
    "url": "assets/js/14.0feb1858.js",
    "revision": "d2f7d5027c9168416202c3bf51165272"
  },
  {
    "url": "assets/js/2.80f2b7d0.js",
    "revision": "df13227e90e3da2af5edcd62431e69bf"
  },
  {
    "url": "assets/js/3.577a809e.js",
    "revision": "006e3a4093daad814beb5e5952ca570a"
  },
  {
    "url": "assets/js/4.36ace9f8.js",
    "revision": "b1537de90708d64bb3eba249b9a7f1c3"
  },
  {
    "url": "assets/js/5.6a52a16e.js",
    "revision": "8568563b41104723caa918918530e2b9"
  },
  {
    "url": "assets/js/6.933e29ae.js",
    "revision": "309b6d3a055975b731292b7b62a0f063"
  },
  {
    "url": "assets/js/7.29f9bfcf.js",
    "revision": "f17a59b057ec8bd2f57fe5a70939c332"
  },
  {
    "url": "assets/js/8.c5282fc7.js",
    "revision": "608cdca0099306ffb7d136535c35be4d"
  },
  {
    "url": "assets/js/9.7289b367.js",
    "revision": "fd8f0a7fc992c1993d64ae31f73481f9"
  },
  {
    "url": "assets/js/app.ec0ba96f.js",
    "revision": "53c6e0c66a4e7f4e3429d938b3f25430"
  },
  {
    "url": "index.html",
    "revision": "b8d75e5ad1cff144ab082231f7509dd9"
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
    "revision": "449fa8797868182f549c96188855af50"
  },
  {
    "url": "til/Flutter/two.html",
    "revision": "64498a9476a05ae7952b40d76f6dce01"
  },
  {
    "url": "til/index.html",
    "revision": "6352f3deaccba16387e9f1928319824e"
  },
  {
    "url": "til/kotlin/one.html",
    "revision": "40b82e338ed6e90066e5ae79ce124fcb"
  },
  {
    "url": "til/kotlin/three.html",
    "revision": "7d73bd90a49d54ea0f1d8723d42757ac"
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
