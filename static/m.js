var particlesConfig = {"particles":{"number":{"value":67,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":1,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":14,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
particlesJS("particles-js", particlesConfig)
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
  window.location.href = "/";
}
function go(url) {
    if (!/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)) {
        url = 'https://www.google.com/search?q=' + url;
    } else if (!/^(https?:\/\/)/.test(url)) {
        url = "https://" + url;
    }
    window.location.href = '/classes/math/' + __uv$config.encodeUrl(url);
}

async function worker() {
    return await navigator.serviceWorker.register("/sw.js", {
      scope: "/classes",
    });
  }

  document.addEventListener("DOMContentLoaded", async function () {
    await worker();
    workerLoaded = true;
  });
  