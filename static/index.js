window.tHs = new ThemeSystem();

var darkTheme = new Theme(document.getElementById("default-theme"), "Abyss (Moon)"); // I do not have programming ineptitude, it's just that this works and I don't really care to change it from the older version of the theme system.
tHs.addTheme(darkTheme);
tHs.setActiveTheme(darkTheme);


let workerLoaded;

async function worker() {
  return await navigator.serviceWorker.register("/sw.js", {
    scope: "/service",
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

var chosenBackend = localStorage.getItem("backend") || "uv";

function setBackend(backend) {
  localStorage.setItem("backend", backend);
  chosenBackend = backend;
  document.querySelectorAll('.uv, .dynamic').forEach((e) => {
    e.classList.remove('active');
  });
  document.querySelectorAll('.' + backend).forEach((e) => {
    e.classList.add('active');
  });
}

switch (chosenBackend) {
  case "uv":
    document.getElementById("settings-temp").querySelector(".uv").classList.add("active");
    break;
  case "dynamic":
    document.getElementById("settings-temp").querySelector(".dynamic").classList.add("active");
    break;
  default:
    document.getElementById("settings-temp").querySelector(".uv").classList.add("active");
    break;
}

function themeSwitch(sel) {
  tHs.setActiveTheme(tHs.getThemeFromName(sel.value));
  document.querySelectorAll("select").forEach((e) => {
    e.value = sel.value;
  });
}

function log() {
  setTimeout(
    console.log.bind(
      console,
      "%cAbyss Version 6",
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

function handleAutocomplete(data) {
  var datalist = document.getElementById("autofill-results");
  datalist.innerHTML = "";
  data[1].forEach((element) => {
    var option = document.createElement("option");
    option.value = element;
    datalist.appendChild(option);
  });
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
    elem.placeholder = "Selected Panic Keys: " + savePush.join(" + ");
    document.querySelectorAll(".panic").forEach((e) => {
      e.placeholder = "Selected Panic Keys: " + savePush.join(" + ");
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
  document.getElementById("settings-temp").querySelector(".panic").placeholder = "Selected Panic Keys: " + window.panicKeys.join(" + ");
}
if (window.panicURL !== null) {
  document.getElementById("settings-temp").querySelector(".panicURL").value = window.panicURL;
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

const runService = async (url) => {
  if (url.trim() == "") return;
  if (ts.getActiveTab() == null) {
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
        case "games":
          runService("https://radon.games/");
          return;
        case "settings":
          const settingsPlaceholder = "Abyss Settings (abyss://settings)";
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
            settingsTemplate.querySelector("#themeSelect").value = tHs.getActiveTheme().getName();
            settingsTemplate
              .querySelector("#themeSelect")
              .removeAttribute("id");
            tabElement.appendChild(settingsTemplate);
            settingsTemplate.querySelectorAll(".uv, .dyn").forEach((e) => {
              e.classList.remove("active");
            });
            settingsTemplate.querySelector("." + chosenBackend).classList.add("active");
            settingsTemplate.querySelector(".panic").placeholder = "Selected Panic Keys: " + window.panicKeys.join(" + ");
            settingsTemplate.querySelector(".panicURL").value = window.panicURL;
            settingsTemplate.querySelector(".tabTitle").placeholder = localStorage.getItem("title") || "Abyss";
            settingsTemplate.querySelector(".tabIcon").placeholder = localStorage.getItem("favicon") || "Default Favicon";
            activeTab.getConnectedElement().querySelector("span").innerText =
              "Settings";
            document.getElementById("adrbar").placeholder = settingsPlaceholder;
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
        !/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)
      ) {
        url = "https://www.google.com/search?q=" + url;
      } if (!/^(https?:\/\/)/.test(url)) {
        url = "https://" + url;
      }
      
      activeTab.getConnectedElement().querySelector("span").innerText = "Website";
      const adrbarInputElement = document.getElementById("adrbar");
      if (adrbarInputElement instanceof HTMLInputElement) {
        adrbarInputElement.value = "";
        adrbarInputElement.placeholder = url;
      }
      const iframe = document.createElement("iframe");
      // iframe.src =
      //   "/service/route?url=" +
      //   encodeURIComponent(url);
      switch (chosenBackend) {
        case "uv":
          iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
          break;
        case "dynamic":
          iframe.src =
            "/service/route?url=" +
            encodeURIComponent(url);
          break;
        default:
          iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
          break;
      }
      iframe.className = "extFrame";
      iframe.style.width = "100%";
      iframe.style.height = "calc(100% - 133px)";
      iframe.style.border = "none";
      iframe.style.background = "#111";
      tabElement.appendChild(iframe);
    }
  }
};

// setInterval(() => {
//   window.location.reload();
// }, 1000);

var idleTimeout;
document.getElementById('adrbar').addEventListener('input', function() {
  clearTimeout(idleTimeout);
  var savedInput = document.getElementById('adrbar').value;
  idleTimeout = setTimeout(function() {
    if (document.getElementById('adrbar').value === '') return;
    if (document.getElementById('autocompleteScript'))
      document.getElementById('autocompleteScript').remove();
    if (savedInput === document.getElementById('adrbar').value) {
      var script = document.createElement('script');
      script.id = 'autocompleteScript';
      script.src =
        'https://suggestqueries.google.com/complete/search?client=firefox&q=' +
        document.getElementById('adrbar').value +
        '&callback=handleAutocomplete';
      document.body.appendChild(script);
    }
  }, 0);
});

const ts = new TabSystem({
  tabContainer: document.querySelector("#tabContainer"),
  tabTemplate: document.querySelector("#tabTemplate"),
  btnTemplate: document.querySelector("#tabBtnTemplate"),
  tabBtnContainer: document.querySelector("#tabsBar"),
  URLBar: document.querySelector("#adrbar"),
  defaultPlaceholder: "Insert URL or Type to search...",
  closePlaceholder: "No tabs open, click the plus icon to open a new tab.",
});

const createNewTab = () => {
  ts.setActiveTab(ts.addTab(new Tab()));
}

createNewTab();

document.getElementById('adrbar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (document.getElementById('adrbar').value === '') return;
    runService(document.getElementById('adrbar').value);
    document.getElementById('adrbar').value;
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
        behavior: 'smooth'
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
        behavior: 'smooth'
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
}

const forward = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.history.forward();
    }
  }
}

const refresh = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.location.reload();
    }
  }
}

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
		var select = document.getElementById('themeSelect');
		var option = document.createElement('option');
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
    });
}

getThemes();