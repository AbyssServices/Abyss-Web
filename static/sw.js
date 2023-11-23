importScripts("/dynamic/dynamic.config.js");
importScripts("/dynamic/dynamic.worker.js");
importScripts("/uv/uv.bundle.js");
importScripts("/uv/uv.config.js");
importScripts("/uv/uv.sw.js"); // override because the support for UV is complete dogshit

const uv = new UVServiceWorker();
const dynamic = new Dynamic();

self.dynamic = dynamic;

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      if (await dynamic.route(event)) {
        return await dynamic.fetch(event);
      }

      if (event.request.url.startsWith(location.origin + "/service/uv/")) {
        return await uv.fetch(event);
      }

      return await fetch(event.request);
    })()
  );
});
