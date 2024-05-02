importScripts("/work/dynamic.config.js");
importScripts("/work/dynamic.worker.js");
importScripts("/class/uv.bundle.js");
importScripts("/class/uv.config.js");
importScripts("/class/uv.sw.js"); // override because the support for UV is complete dogshit

const uv = new UVServiceWorker();
const dynamic = new Dynamic();

self.dynamic = dynamic;

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      if (await dynamic.route(event)) {
        return await dynamic.fetch(event);
      }

      if (event.request.url.startsWith(location.origin + "/classes/math/")) {
        return await uv.fetch(event);
      }

      return await fetch(event.request);
    })()
  );
});

