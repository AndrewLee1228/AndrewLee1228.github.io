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
    "revision": "8121fcd1ecee88fec24ee2393dc5b7b0"
  },
  {
    "url": "about/index.html",
    "revision": "fa731a0a5d6b357b63115709b8ef760e"
  },
  {
    "url": "about/README2.html",
    "revision": "a1da54198770f2dc1c280f95a6de96b4"
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
    "url": "assets/js/10.817ad689.js",
    "revision": "ee01f065896020ec926a7173a35a1043"
  },
  {
    "url": "assets/js/11.bc446a52.js",
    "revision": "0c4c7fae915eb2d531307b15e3920125"
  },
  {
    "url": "assets/js/12.a5571cb6.js",
    "revision": "7850c6ce47502e489fd9a467e3fa9e3b"
  },
  {
    "url": "assets/js/13.47fb32b8.js",
    "revision": "02b7d6accb09e2fa978cb9a961ffcedf"
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
    "url": "assets/js/8.02f5ff81.js",
    "revision": "15b3b05cbcfe302f175b2242d5d1342c"
  },
  {
    "url": "assets/js/9.c0921377.js",
    "revision": "5a839dc069ab29fc64e7b670f656664e"
  },
  {
    "url": "assets/js/app.829f727e.js",
    "revision": "2db53bb872ca2aad6488a8b30b81211e"
  },
  {
    "url": "index.html",
    "revision": "e67e3c6b1b3eea46c362c5b67422cf81"
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
    "revision": "0748cf33d562eb63f848601bf7c93156"
  },
  {
    "url": "til/Flutter/two.html",
    "revision": "81d9eeb18830a0c4d5cfae54e1a19d26"
  },
  {
    "url": "til/index.html",
    "revision": "d40ce21c40ffd4e30a439fb8a3264476"
  },
  {
    "url": "til/kotlin/one.html",
    "revision": "9182f9896a9fd67f95c56cdcab649ee8"
  },
  {
    "url": "til/kotlin/three.html",
    "revision": "df0a5d491fd2bcc4a71e0c5873c8bb6b"
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
