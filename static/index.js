const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  window.location.href = "m.html";
}

window.tHs = new ThemeSystem();

var darkTheme = new Theme(document.getElementById("default-theme"), "Moon"); // I do not have programming ineptitude, it's just that this works and I don't really care to change it from the older version of the theme system.
tHs.addTheme(darkTheme);
tHs.setActiveTheme(darkTheme);

let workerLoaded;

async function worker() {
  return await navigator.serviceWorker.register("/sw.js", {
    scope: "/classes",
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await worker();
  workerLoaded = true;
});

function prependHttps(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}
var chosenParticleState = localStorage.getItem("particleState") || "on";


document.addEventListener("DOMContentLoaded", function (event) {
  if (chosenParticleState === "on") {
    var particlesConfig = {"particles":{"number":{"value":67,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":1,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
    particlesJS("particles-js", particlesConfig)
  }
});

function particleSelect(param) {
  if (param == 'choose...') {return;}
  localStorage.setItem("particleState", param);
  chosenParticleState = param;

}

var chosenAdState = localStorage.getItem("adState") || "adchangeon";

if (chosenAdState === "adchangeon") {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//pl22667078.highcpmgate.com/ed/d6/27/edd627939d21229c8335c92b2a743aa7.js';
  document.head.appendChild(script);
} 

function adChange(parse) {
  localStorage.setItem("adState", parse);
  chosenAdState = parse;
  document.querySelectorAll(".adchangeon, .adchangeoff").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelectorAll("." + parse).forEach((e) => {
    e.classList.add("active");
}
  )
}


var autoLaunchCookie = localStorage.getItem("autolaunch") || "off";

function autoLaunch() {
  if (autoLaunchCookie === 'off') {
    localStorage.setItem("autolaunch", "on");
    autoLaunchCookie = "on";
    document.getElementById("autoLaunch").classList.add("active");
  } else if (autoLaunchCookie === 'on') {
    localStorage.setItem("autolaunch", "off");
    autoLaunchCookie = "off";
    document.getElementById("autoLaunch").classList.remove("active");
  }
}

switch (autoLaunchCookie) {
  case "on":
    document
      .getElementById("autoLaunch")
      .classList.add("active");
    break;
  case "off":
    document
      .getElementById("autoLaunch")
      .classList.remove("active");
    break;
  default:
    document
      .getElementById("autoLaunch")
      .classList.remove("active");
    break;
}

var chosenBackend = localStorage.getItem("backend") || "uv";

function setBackend(backend) {
  localStorage.setItem("backend", backend);
  chosenBackend = backend;
  document.querySelectorAll(".uv, .dynamic").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelectorAll("." + backend).forEach((e) => {
    e.classList.add("active");
  });
}



var engineSelected = localStorage.getItem("engine") || "Google";
var currentSearchURL = "https://www.google.com/search?q="
function engineSwitch(sel) {
  localStorage.setItem("engine", sel.value);
  if (localStorage.getItem("engine") === "Google") {
    currentSearchURL = "https://www.google.com/search?q=";
  } else if (localStorage.getItem("engine") === "Bing") {
    currentSearchURL = "https://www.bing.com/search?q=";
  } else if (localStorage.getItem("engine") === "DuckDuckGo") {
    currentSearchURL = "https://duckduckgo.com/?t=h_&q=";
  }
}

if (localStorage.getItem("engine") === "Google") {
  currentSearchURL = "https://www.google.com/search?q=";
} else if (localStorage.getItem("engine") === "Bing") {
  currentSearchURL = "https://www.bing.com/search?q=";
} else if (localStorage.getItem("engine") === "DuckDuckGo") {
  currentSearchURL = "https://duckduckgo.com/?t=h_&q=";
} 

var themeSelected = localStorage.getItem("theme") || "Moon";

function themeSwitch(sel) {
  tHs.setActiveTheme(tHs.getThemeFromName(sel.value));
  document.getElementById("themeSelect").value = sel.value;
  localStorage.setItem("theme", sel.value);
}

function erudaToggle() {
  var iframe = ts.getActiveTab().findFirstIFrame();
  if (!iframe) return

  const erudaWindow = iframe.contentWindow
  const erudaDocument = iframe.contentDocument

  if (!erudaWindow || !erudaDocument) return

  if (erudaWindow.eruda?._isInit) {
    erudaWindow.eruda.destroy()
  } else {
    let script = erudaDocument.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/eruda'
    script.onload = function () {
      if (!erudaWindow) return
      erudaWindow.eruda.init()
      erudaWindow.eruda.show()
    }
    erudaDocument.head.appendChild(script)
   
}
}

function log() {
  setTimeout(
    console.log.bind(
      console,
      "%cAbyss Web",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:30px;"
    )
  );
  setTimeout(
    console.log.bind(
      console,
      "%cIf you are seeing this, the main script system has loaded.",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:24px;"
    )
  );
  setTimeout(
    console.log.bind(
      console,
      "%cIf you encounter an error, contact the development team on our discord. DM the info below.",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:16px;"
    )
  );
  setTimeout(
    console.log.bind(
      console,
      "%cDo not share output to anyone but trusted Abyss developers with a role in the server! Someone may steal your info.",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:16px;"
    )
  );
  let online = navigator.onLine;
  let userAgent = navigator.userAgent;
  let browserName;
  let diagnosticDomain = window.location.href;
  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "Chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "Firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "Safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "Opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "Edge";
  } else {
    browserName = "Browser not detected!";
  }
  setTimeout(
    console.log.bind(
      console,
      `%c Information: \n Online: ${online} \n URL: ${diagnosticDomain} \n Browser: ${browserName} \n UA: ${userAgent}`,
      "background: grey;color:white;padding:5px;line-height: 26px; border-radius: 5px;font-size:12px;"
    )
  );
}

log();
const searchInput = document.getElementById('adrbar');
const suggestionsList = document.getElementById('suggestions');
document.getElementById("adrbar").addEventListener("focus", function () {
  suggestionsList.style.display = 'flex';
});
document.getElementById("adrbar").addEventListener("blur", function () {
  setTimeout(function() {
    suggestionsList.style.display = 'none';
    searchInput.style.borderBottomLeftRadius = "38px";
    searchInput.style.borderBottomRightRadius = "38px";
    searchInput.style.borderTopLeftRadius = "38px";
    searchInput.style.borderTopRightRadius = "38px";
  }, 300); // unnoticeable delay, just so that the form handles clicks before it dissapears
});

setInterval(() => {
  if (suggestionsList.querySelector('div') && suggestionsList.style.display == 'flex') {
    searchInput.style.borderBottomLeftRadius = "0px";
    searchInput.style.borderBottomRightRadius = "0px";
    searchInput.style.borderTopLeftRadius = "19px";
    searchInput.style.borderTopRightRadius = "19px";
  }
}, 100);
searchInput.addEventListener('input', function() {
  const query = searchInput.value.trim(); // Use searchInput directly
  if (query === '') {
    suggestionsList.innerHTML = '';
    return;
  }

  // Create a script element to fetch suggestions from Google's Autocomplete API
  const script = document.createElement('script');
  script.src = `https://suggestqueries.google.com/complete/search?client=firefox&q=${query}&callback=handleSuggestions`;
  document.body.appendChild(script);
});

// Callback function to handle suggestions
function handleSuggestions(data) {
  const suggestions = data[1];
  showSuggestions(suggestions);
}

function showSuggestions(suggestions) {
  let html = '';
  suggestions.forEach(suggestion => {
    html += `<div>${suggestion}</div>`;
  });
  suggestionsList.innerHTML = html;
}

// Handle click on suggestion
suggestionsList.addEventListener('click', function(event) {
  if (event.target.tagName === 'DIV') {
    runService(event.target.textContent);
    suggestionsList.innerHTML = '';
  }
});


function resetPanicBind() {
  window.panicKeys = null;
  localStorage.setItem("panicKeys", null);
  document.getElementById("panic").placeholder = "Enter Key"
}

const recordKeys = (elem, timeLimit) => {
  if (!elem) return;
  elem.placeholder = "Press a key...";
  window.panicKeys = null;
  let savePush = [];
  let firstKeyHit = false;
  const keydownHandler = (e) => {
    if (!firstKeyHit) {
      firstKeyHit = true;
      setTimeout(() => {
        document.removeEventListener("keydown", keydownHandler);
        window.panicKeys = savePush;
        localStorage.setItem("panicKeys", JSON.stringify(savePush));
      }, timeLimit);
    }
    savePush.push(e.key);
    elem.placeholder = "selected: " + savePush.join(" + ");
    document.querySelectorAll(".panic").forEach((e) => {
      e.placeholder = "selected: " + savePush.join(" + ");
    });
  };
  document.addEventListener("keydown", keydownHandler);
};

const cloakTitle = (title) => {
  if (title.trim() == "") {
    title = "Abyss";
  }
  document.title = title;
  localStorage.setItem("title", title);
  document.querySelectorAll(".tabTitle").forEach((e) => {
    e.placeholder = title;
  });
};

let savedFavicon;
if (document.querySelector("link[rel*='icon']")) {
  savedFavicon = document.querySelector("link[rel*='icon']").href;
}

const cloakFavicon = (url) => {
  if (url !== "assets/favicon.ico" && !/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)) {
    alert("You must put a valid URL in the URL box.");
    url = "assets/favicon.ico"
} else if (url !== "assets/favicon.ico" && !/^(https?:\/\/)/.test(url)) {
    url = "https://" + url;
  } 
  if (url.trim() == "") {
    url = savedFavicon;
  }
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = url;
  document.getElementsByTagName("head")[0].appendChild(link);
  localStorage.setItem("favicon", url);
  document.querySelectorAll(".tabIcon").forEach((e) => {
    e.placeholder = url;
  });
};

const cloakURL = (url) => {
   if (!/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)) {
    alert("You must put a valid URL in the URL box.");
    url = "https://google.com"
  } else if (!/^(https?:\/\/)/.test(url)) {
    url = "https://" + url;
  } 

  if (url.trim() == "") {
    url = "https://google.com";
  }
  window.panicURL = url;
  localStorage.setItem("panicURL", url);
  document.querySelectorAll(".panicURL").forEach((e) => {
    e.value = url;
  });
};

window.panicURL = localStorage.getItem("panicURL") || "https://google.com";
window.panicKeys = JSON.parse(localStorage.getItem("panicKeys"));

if (window.panicKeys !== null) {
  document.getElementById("settings-temp").querySelector(".panic").placeholder =
    "selected: " + window.panicKeys.join(" + ");
}
if (window.panicURL !== null) {
  document.getElementById("settings-temp").querySelector(".panicURL").value =
    window.panicURL;
}

let hitKeys = [];
let hitKeyRetention = false;
const keydownHandler = (e) => {
  if (window.panicKeys == null) return;
  if (!hitKeyRetention) {
    hitKeyRetention = true;
    setTimeout(() => {
      hitKeyRetention = false;
      hitKeys = [];
    }, 1000);
  }
  hitKeys.push(e.key);
  if (hitKeys.length >= window.panicKeys.length) {
    let hitKeysSet = new Set(hitKeys);
    let panicKeysSet = new Set(window.panicKeys);
    if (
      new Set([...hitKeysSet].filter((x) => panicKeysSet.has(x))).size ===
      panicKeysSet.size
    ) {
      window.open(window.panicURL);
    }
  }
};

document.addEventListener("keyup", keydownHandler);

if (localStorage.getItem("title")) {
  document.title = localStorage.getItem("title");
}

if (localStorage.getItem("favicon")) {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = localStorage.getItem("favicon");
  document.getElementsByTagName("head")[0].appendChild(link);
}

function addDropElem(name) {
  var select = document.getElementById("themeSelect");
  var option = document.createElement("option");
  option.value = name;
  option.innerText = name;
  select.appendChild(option);
}

async function getThemes() {
  await fetch("/assets/themes.json")
    .then((res) => res.json())
    .then((json) => {
      for (var theme = 0; theme < json.length; theme++) {
        var themeName = json[theme].name;
        var themeURL = json[theme].url;
        console.log(
          "%cDEV:%c Found %c" + themeName + " %c" + themeURL,
          "font-weight: bold",
          "font-weight: normal",
          "font-weight: bold",
          "font-weight: normal"
        );
        tHs.addTheme(new Theme(themeURL, themeName));
        addDropElem(themeName);
      }
    });
}

const openNewtab = () => {
  ts.setActiveTab(ts.addTab(new Tab()));
};

let splashtext = [
  "check out discord.gg/goabyss",
  "made by paxton warin",
  "want your own link? check out discord.gg/goabyss",
  "thanks for using the site!",
  "check out the settings page",
  "check out the games page",
  "check out the settings to hide from your teacher",
  "need ChatGPT? search for it on the games page!",
  "shoutout owen, ramsey, and levi",
  "co owned by wyatt batdorf",
  "enzo is interesting...",
]

const runService = async (url, override, overrideadrbar) => {
  if (url.trim() == "") return;
  if (ts.getActiveTab() == null || url == "abyss://settings" || url == "abyss:settings" || url == "abyss:apps" || url== "abyss://apps") {
    openNewtab();
  }
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const tabElement = activeTab.getTabElement();
    const adrbarInput = document.getElementById("adrbar");
    if (adrbarInput instanceof HTMLInputElement) {
      adrbarInput.value = "";
    }
    const mainStartElement = tabElement.querySelector(".mainStart");
    if (mainStartElement) {
      mainStartElement.style.display = "none";
    }
    if (/^(abyss:)(\/)*[a-z]*/.test(url)) {
      url = url.replace(/^(abyss:)(\/)*/, "");
      const adrbarInputElement = document.getElementById("adrbar");
      if (adrbarInputElement instanceof HTMLInputElement) {
        adrbarInputElement.value = "";
      }
      switch (url) {
        case "newtab":
          const defaultPlaceholder = ts.getConfig().defaultPlaceholder;
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const firstIFrame = activeTab.findFirstIFrame();
          if (firstIFrame) {
            firstIFrame.remove();
          }
          const newTabTemplate = document
            .querySelector(".mainStartContain")
            .cloneNode(true);
          tabElement.appendChild(newTabTemplate);
          activeTab.getConnectedElement().querySelector("span").innerText =
            "New Tab";
          document.getElementById("adrbar").placeholder = defaultPlaceholder;
          
          return;
        case "apps":
          const appsPlaceholder = "abyss apps (abyss://apps)";
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const appsTemplate = document
          .getElementById("apps-temp")
            .cloneNode(true);
            if (appsTemplate instanceof HTMLDivElement) {
              appsTemplate.id = "";
              appsTemplate.style.display = "initial";
              tabElement.appendChild(appsTemplate);
              activeTab.getConnectedElement().querySelector("span").innerText =
                "Apps";
              document.getElementById("adrbar").placeholder = appsPlaceholder;
              activeTab.getConnectedElement().querySelector("#tabFavicon").src = "assets/game.png"
            }
            setTimeout(initApps, 1);
            setTimeout(initAppSearch, 1);
        return;
        case "settings":
          const settingsPlaceholder = "abyss settings (abyss://settings)";
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const settingsTemplate = document
            .getElementById("settings-temp")
            .cloneNode(true);
          if (settingsTemplate instanceof HTMLDivElement) {
            settingsTemplate.id = "";
            settingsTemplate.style.display = "initial";
            settingsTemplate.querySelector("#themeSelect").value = tHs
              .getActiveTheme()
              .getName();
            settingsTemplate
              .querySelector("#themeSelect")
              .removeAttribute("id");
            tabElement.appendChild(settingsTemplate);
            if (window.panicKeys !== null) {
              settingsTemplate.querySelector(".panic").placeholder =
                "selected: " + window.panicKeys.join(" + ");
            }
            settingsTemplate.querySelector(".panicURL").value = window.panicURL;
            settingsTemplate.querySelector(".tabTitle").placeholder =
              localStorage.getItem("title") || "Abyss";
            settingsTemplate.querySelector(".tabIcon").placeholder =
              localStorage.getItem("favicon") || "Default Favicon";
            activeTab.getConnectedElement().querySelector("span").innerText =
              "Settings";
            document.getElementById("adrbar").placeholder = settingsPlaceholder;
            activeTab.getConnectedElement().querySelector("#tabFavicon").src = "assets/cog.png"
          }
          return;
        case "about":
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const aboutTemplate = document
            .getElementById("about-temp")
            .cloneNode(true);
          if (aboutTemplate instanceof HTMLDivElement) {
            aboutTemplate.id = "";
            aboutTemplate.style.display = "initial";
            tabElement.appendChild(aboutTemplate);
            activeTab.getConnectedElement().querySelector("span").innerText =
              "About Abyss";
          }
          return;
        default:
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const invalidMainTemplate = document
            .getElementById("invalid-temp")
            .cloneNode(true);
          if (invalidMainTemplate instanceof HTMLDivElement) {
            invalidMainTemplate.id = "";
            invalidMainTemplate.style.display = "initial";
            tabElement.appendChild(invalidMainTemplate);
            activeTab.getConnectedElement().querySelector("span").innerText =
              "Invalid";
          }
          return;
      }
    } else {
      if (tabElement.querySelectorAll(".extFrame").length > 0) {
        tabElement.querySelectorAll(".extFrame").forEach((frame) => {
          frame.remove();
        });
      }
      if (
        !override &&
        !/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)
      ) {
        url = currentSearchURL + url;
      }
      if (!override && !/^(https?:\/\/)/.test(url)) {
        url = "https://" + url;
      }

      // activeTab.getConnectedElement().querySelector("span").innerText = "Website";

      const adrbarInputElement = document.getElementById("adrbar");
      if (adrbarInputElement instanceof HTMLInputElement) {
        adrbarInputElement.value = "";
        adrbarInputElement.placeholder = url;
        if (overrideadrbar) {
          adrbarInputElement.placeholder = overrideadrbar;
        }
      }
      const iframe = document.createElement("iframe");
      // iframe.src =
      //   "/service/route?url=" +
      //   encodeURIComponent(url);
      if (override) {
        iframe.src = url;
      } else {
        switch (chosenBackend) {
          case "uv":
            iframe.src = "/classes/math/" + __uv$config.encodeUrl(url);
            break;
          case "dynamic":
            iframe.src = "/classes/english/route?url=" + encodeURIComponent(url);
            break;
          default:
            iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
            break;
        }
      }
      iframe.className = "extFrame";
      iframe.style.width = "100%";
      iframe.style.border = "none";
      iframe.style.background = "#111";
      tabElement.appendChild(iframe);
    }
  }
};
function decodeUrl(str) {
  if (!str) return str;
  let [input, ...search] = str.split('?');

  return (
      decodeURIComponent(input)
          .split('')
          .map((char, ind) =>
              ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
          )
          .join('') + (search.length ? '?' + search.join('?') : '')
  );
}

setInterval(() => {
  const activeTab = ts.getActiveTab();
  if (!activeTab) return;
  if (!activeTab.findFirstIFrame()) return;
  if (getTabTitle() == "http:") return;
  activeTab.getConnectedElement().querySelector("span").innerText =
    getTabTitle() || "Website";
  try {if (localStorage.getItem("backend") == 'uv' ||  localStorage.getItem("backend") == null ) {
    var extractedPart = activeTab.findFirstIFrame().contentDocument.location.href.substring(activeTab.findFirstIFrame().contentDocument.location.href.indexOf("/classes/math/") + "/classes/math/".length);
    document.querySelector("#adrbar").placeholder = decodeUrl(extractedPart);
    activeTab.getConnectedElement().querySelector("#tabFavicon").src = "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + decodeUrl(extractedPart) + "&size=128";
  } else if (localStorage.getItem("backend") == 'dynamic') {
    var extractedPart = activeTab.findFirstIFrame().contentDocument.location.href.substring(activeTab.findFirstIFrame().contentDocument.location.href.indexOf("/classes/english/") + "/classes/english/".length);
    document.querySelector("#adrbar").placeholder = decodeUrl(extractedPart);
    activeTab.getConnectedElement().querySelector("#tabFavicon").src = "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + decodeUrl(extractedPart) + "&size=128";
  }} catch (e) {}
  
  }, 100);


const ts = new TabSystem({
  tabContainer: document.querySelector("#tabContainer"),
  tabTemplate: document.querySelector("#tabTemplate"),
  btnTemplate: document.querySelector("#tabBtnTemplate"),
  tabBtnContainer: document.querySelector("#tabsBar"),
  URLBar: document.querySelector("#adrbar"),
  defaultPlaceholder: "type here to search...",
  closePlaceholder: "No tabs open, click the plus icon to open a new tab.",
});

const createNewTab = () => {
  ts.setActiveTab(ts.addTab(new Tab()));
  ts.activeTab.getTabElement().querySelector("#quote").innerText = splashtext[Math.floor(Math.random() * splashtext.length)];
  ts.activeTab.getTabElement().querySelector('#adrbar2').addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (ts.activeTab.getTabElement().querySelector('#adrbar2').value === "") return;
      runService(ts.activeTab.getTabElement().querySelector('#adrbar2').value);
      ts.activeTab.getTabElement().querySelector('#adrbar2').value;
    }
  });
};

createNewTab();

document.getElementById("adrbar").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    if (document.getElementById("adrbar").value === "") return;
    runService(document.getElementById("adrbar").value);
    document.getElementById("adrbar").value;
  }
});



let tb = document.getElementById("tabsBar");
if (tb) {
  tb.addEventListener(
    "wheel",
    (evt) => {
      evt.preventDefault();
      let scrollAmount;
      if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollAmount = evt.deltaY * 20;
      } else {
        scrollAmount = evt.deltaY * 2.5;
      }
      tb.scrollTo({
        left: tb.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}

let bb = document.getElementById("bookmarksBar");
if (bb) {
  bb.addEventListener(
    "wheel",
    (evt) => {
      evt.preventDefault();
      let scrollAmount;
      if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollAmount = evt.deltaY * 20;
      } else {
        scrollAmount = evt.deltaY * 2.5;
      }
      bb.scrollTo({
        left: bb.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}

let ad = document.getElementById("adrbar");
if (ad) {
  ad.addEventListener(
    "wheel",
    (evt) => {
      evt.preventDefault();
      let scrollAmount;
      if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollAmount = evt.deltaY * 20;
      } else {
        scrollAmount = evt.deltaY * 2.5;
      }
      ad.scrollTo({
        left: ad.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}

const back = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.history.back();
    }
  }
};

const forward = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.history.forward();
    }
  }
};

const refresh = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.location.reload();
    }
  }
};

function opNT() {
  if (ts.getActiveTab() != null) {
    if (ts.getActiveTab().findFirstIFrame() != null) {
      var win = window.open("about:blank", "_blank");
      const frame = document.createElement("iframe");
      frame.src = ts.getActiveTab().findFirstIFrame().src;
      win.document.body.appendChild(frame);
      ts.deleteTab(ts.getActiveTab(), true);
      frame.style.cssText =
        "margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1000000; border: none; border-radius: 0;";
    }
  }
}

function addDropElem(name) {
  var select = document.getElementById("themeSelect");
  var option = document.createElement("option");
  option.value = name;
  option.innerText = name;
  select.appendChild(option);
}

function getThemes() {
  fetch("assets/themes.json")
    .then((res) => res.json())
    .then((json) => {
      for (var theme = 0; theme < json.length; theme++) {
        var themeName = json[theme].name;
        var themeURL = json[theme].url;
        console.log(
          "%cDEV:%c Found %c" + themeName + " %c" + themeURL,
          "font-weight: bold",
          "font-weight: normal",
          "font-weight: bold",
          "font-weight: normal"
        );
        tHs.addTheme(new Theme(themeURL, themeName));
        addDropElem(themeName);
      }
      if (
        localStorage.getItem("theme") != null &&
        tHs.getThemeFromName(localStorage.getItem("theme"))
      ) {
        tHs.setActiveTheme(tHs.getThemeFromName(localStorage.getItem("theme")));
      }
    });
}

getThemes();

function getTabTitle() {
  if (!ts.getActiveTab()) return;
  if (!ts.getActiveTab().findFirstIFrame()) return;
  let url = ts.getActiveTab().findFirstIFrame().contentDocument.title;
  if (url) return url;
  return ts
    .getActiveTab()
    .findFirstIFrame()
    .src.toString()
    .replace(/(.+url=https%3A%2F%2F|.+continue=https:\/\/)/, "")
    .replace(/(%2F|\/).*/, "");
}
var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function removeBookmark(bookmark) {
  document.getElementById(bookmark).remove();
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i][0] == bookmark) {
      bookmarks.splice(i, 1);
    }
  }
  if (bookmarks.length <= 0) {
    document.getElementById("tabContainer").style.height = "calc(100vh - 110px)";
    document.getElementById("headerArea").style.height = "125px";
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function addBookmark(bookmark) {
  var bookmarkEl = document.createElement("div");
  bookmarkEl.classList.add("bookmark");
  bookmarkEl.innerHTML = `
    <span onclick="runService('${bookmark[2]}', true, '${bookmark[1]}')">
      ${bookmark[1]}
    </span>
    <div class="bookmarkClose" onclick="removeBookmark(${bookmark[0]})">
      <span>+</span>
    </div>
  `;
  bookmarkEl.id = bookmark[0];
  document.getElementById("bookmarksBar").appendChild(bookmarkEl);
  if (bookmarks.length > 0) {
    document.getElementById("tabContainer").style.height = "calc(100% - 145.5px)";
    document.getElementById("headerArea").style.height = "160px";
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function fullscreen() {
    const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
  firstIFrame.requestFullscreen();
}
}
}

function launchAB() {
  const popup = open('about:blank', '_blank')
  if (!popup || popup.closed) {
    alert('Please allow popups and redirects.')
  } else {
    const doc = popup.document
    const iframe = doc.createElement('iframe')
    const style = iframe.style
    const link = doc.createElement('link')

    const name = localStorage.getItem('title') || 'My Drive - Google Drive'
    const icon = localStorage.getItem('favicon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://www.google.com/'
    location.replace(pLink)

    const script = doc.createElement('script')
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}


function tabSwitch(parse) {
    if (parse.value == 'Classroom') {
      cloakTitle('Home');
      cloakFavicon('https://ssl.gstatic.com/classroom/ic_product_classroom_144.png');
    } else if (parse.value == 'Schoology') {
      cloakTitle('Home | Schoology');
      cloakFavicon('https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico');
    } else if (parse.value == 'Mathspace') {
      cloakTitle('Mathspace');
      cloakFavicon('https://mathspace-production-static.mathspace.co/static/cache/ea9ab2022ffbb8b29669acc8bd75e6a3b2187553/website/favicons/android-chrome-192x192.png');
    } else if (parse.value == 'Google') {
      cloakTitle('Google');
      cloakFavicon('https://www.google.com/favicon.ico');
    } else if (parse.value == 'Docs') {
      cloakTitle('Google Docs');
      cloakFavicon('https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico');
    } else if (parse.value == 'Drive') {
      cloakTitle('Home - Google Drive');
      cloakFavicon('https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png');
    } else if (parse.value == 'iXL') {
      cloakTitle('IXL');
      cloakFavicon('https://www.ixl.com/favicon.ico');
    } else if (parse.value == 'Khan') {
      cloakTitle('Khan Academy | Free Online Courses');
      cloakFavicon('https://www.khanacademy.org/favicon.ico');
    } 
}

function resetTab() {
  cloakTitle('Abyss')
  cloakFavicon('assets/favicon.ico')
}

function bookmark() {
  if (localStorage.getItem("backend") == 'uv' ||  localStorage.getItem("backend") == null ) {
    var url = "/classes/math/" + __uv$config.encodeUrl(document.getElementById('adrbar').placeholder);
  } else if (localStorage.getItem("backend") == 'dynamic') {
    var url =  "/classes/english/" + encodeURIComponent(document.getElementById('adrbar').placeholder);
  }
  if (ts.getActiveTab() != null) {
    if (ts.getActiveTab().findFirstIFrame() != null) {
      var bookmark = [
        ts.genRanId(),
        ts.getActiveTab().findFirstIFrame().contentDocument.title ||
        url,
        url
      ];
      bookmarks.push(bookmark);
      addBookmark(bookmark);
    }
  }
}

if (bookmarks.length > 0) {
  bookmarks.forEach((bookmark) => {
    addBookmark(bookmark);
  });
  document.getElementById("tabContainer").style.height = "calc(100% - 145.5px)";
  document.getElementById("headerArea").style.height = "160px";
}
try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

if (!inFrame && localStorage.getItem("autolaunch") === 'on' && !navigator.userAgent.includes('Firefox')) {
  const popup = open('about:blank', '_blank')
  if (!popup || popup.closed) {
    alert('Please allow popups and redirects.')
  } else {
    const doc = popup.document
    const iframe = doc.createElement('iframe')
    const style = iframe.style
    const link = doc.createElement('link')

    const name = localStorage.getItem('title') || 'My Drive - Google Drive'
    const icon = localStorage.getItem('favicon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://www.google.com/'
    location.replace(pLink)

    const script = doc.createElement('script')
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}

function initApps() {
  
  // Destroy all elements inside of #apps-temp .settingCards
  var settingCards = ts.activeTab.getTabElement().querySelector('#appsOrganizer');
  settingCards.innerHTML = '';
  // If the parameter is "choose...", then break the function
  
  // Fetch apps.json and filter based on the category
  fetch('assets/apps.json')
      .then(response => response.json())
      .then(data => {
          // Sort apps alphabetically by title
          data.sort((a, b) => a.name.localeCompare(b.name));
          
          // Iterate through sorted data and create app cards
          data.forEach(app => {
              // Create a new app card element
              var appCard = document.createElement('div');
              appCard.className = 'appCard'; // Add class based on category

              // Add onclick event to the app card
              appCard.onclick = function() {
                  runService(app.url);
              };

              // Create app image container
              var appImgContainer = document.createElement('div');
              appImgContainer.id = 'appImgContainer';
              appImgContainer.className = app.category;
              var appImg = document.createElement('img');
              appImg.src = app.image;
              appImgContainer.appendChild(appImg);

              // Create app title container
              var appTitleContainer = document.createElement('div');
              appTitleContainer.id = 'appTitleContainer';
              var appTitle = document.createElement('p');
              appTitle.id = 'appTitle';
              appTitle.textContent = app.name;
              appTitleContainer.appendChild(appTitle);

              // Append image and title containers to the app card
              appCard.appendChild(appImgContainer);
              appCard.appendChild(appTitleContainer);

              // Append the app card to the settingCards container
              settingCards.appendChild(appCard);
          });
      });
}

function filterCategory(category) {
  // Destroy all elements inside of #apps-temp .settingCards
  ts.activeTab.getTabElement().querySelector('#appsOrganizer').innerHTML = '';

  // If the parameter is "choose...", then break the function
  if (category === "choose...") return;

  fetch('assets/apps.json')
      .then(response => response.json())
      .then(data => {
          // Sort the data alphabetically by app name
          data.sort((a, b) => a.name.localeCompare(b.name));

          // Loop through each app in the sorted JSON data
          data.forEach(app => {
              // Check if the app's category matches the desired category
              if (app.category.includes(category) || category === 'all') {
                  // Create a new app card element
                  var appCard = document.createElement('div');
                  appCard.className = 'appCard'; // Add class based on category

                  // Add onclick event to the app card
                  appCard.onclick = function () {
                      runService(app.url);
                  };

                  // Create app image container
                  var appImgContainer = document.createElement('div');
                  appImgContainer.id = 'appImgContainer';
                  appImgContainer.className = app.category;
                  var appImg = document.createElement('img');
                  appImg.src = app.image;
                  appImgContainer.appendChild(appImg);

                  // Create app title container
                  var appTitleContainer = document.createElement('div');
                  appTitleContainer.id = 'appTitleContainer';
                  var appTitle = document.createElement('p');
                  appTitle.id = 'appTitle';
                  appTitle.textContent = app.name;
                  appTitleContainer.appendChild(appTitle);

                  // Append image and title containers to the app card
                  appCard.appendChild(appImgContainer);
                  appCard.appendChild(appTitleContainer);

                  // Append the app card to the settingCards container
                  ts.activeTab.getTabElement().querySelector('#appsOrganizer').appendChild(appCard);
              }
          });
      });
}
function filterAppByName(name) {
  if (!name) {
    ts.activeTab.getTabElement().querySelector('#appsOrganizer').innerHTML = ''; 
    initApps();
    return;}
  // Destroy all elements inside of #apps-temp .settingCards
  ts.activeTab.getTabElement().querySelector('#appsOrganizer').innerHTML = '';

  // If the parameter is empty or null, break the function
  if (name)
  fetch('assets/apps.json')
      .then(response => response.json())
      .then(data => {
          // Sort the data alphabetically by app name
          data.sort((a, b) => a.name.localeCompare(b.name));

          // Loop through each app in the sorted JSON data
          data.forEach(app => {
              // Check if the app's name contains the desired name
              if (app.name.toLowerCase().includes(name.toLowerCase())) {
                  // Create a new app card element
                  var appCard = document.createElement('div');
                  appCard.className = 'appCard'; // Add class based on category

                  // Add onclick event to the app card
                  appCard.onclick = function () {
                      runService(app.url);
                  };

                  // Create app image container
                  var appImgContainer = document.createElement('div');
                  appImgContainer.id = 'appImgContainer';
                  appImgContainer.className = app.category;
                  var appImg = document.createElement('img');
                  appImg.src = app.image;
                  appImgContainer.appendChild(appImg);

                  // Create app title container
                  var appTitleContainer = document.createElement('div');
                  appTitleContainer.id = 'appTitleContainer';
                  var appTitle = document.createElement('p');
                  appTitle.id = 'appTitle';
                  appTitle.textContent = app.name;
                  appTitleContainer.appendChild(appTitle);

                  // Append image and title containers to the app card
                  appCard.appendChild(appImgContainer);
                  appCard.appendChild(appTitleContainer);

                  // Append the app card to the settingCards container
                  ts.activeTab.getTabElement().querySelector('#appsOrganizer').appendChild(appCard);
              }
          });
      });
}

function initAppSearch() {
var categorySearchInput = ts.activeTab.getTabElement().querySelector('#categorySearch');
  categorySearchInput.addEventListener('input', function() {
      filterAppByName(categorySearchInput.value);
  });
}

function handleTargets() {
  // Get the active tab
  const activeTab = ts.getActiveTab();
  
  // Find the first iframe in the active tab
  const iframe = activeTab.findFirstIFrame();
  
  // Get the content document of the iframe
  const contentDocument = iframe.contentDocument;
  
  // Find all elements with target="_top" or target="_blank"
  const elements = contentDocument.querySelectorAll('[target="_top"], [target="_blank"]');
  
  // Loop through each element
  elements.forEach(element => {
      // Check if target="_top"
      if (element.getAttribute('target') === '_top') {
          // Remove the entire attribute
          element.removeAttribute('target');
      } else if (element.getAttribute('target') === '_blank') {
        const href = element.getAttribute('href');
        element.removeAttribute('target');
        element.setAttribute('onclick', `runService(${href}, true)`);
      }
  });
}
setInterval(() => {
  if (ts.getActiveTab().findFirstIFrame()) {
    handleTargets();
    }
    
}, 1000);
