class ThemeSystem {
  constructor() {
    this.config = {}; // is there even a need for this
    this.themes = [];
    this.themeCount = 0;
    this.activeTheme = null;
    this.lastTheme = null;
  }

  getThemeFromName(name) {
    for (let i = 0; i < this.themes.length; i++) {
      if (this.themes[i].getName() == name) {
        return this.themes[i];
      }
    }
  }

  addTheme(theme) {
    for (let i = 0; i < this.themes.length; i++) {
      if (this.themes[i].getName() == theme.getName()) {
        console.error(
          "A theme with the name " + theme.getName() + " already exists!"
        );
        return;
      }
    }
    if (this.lastTheme != theme) {
      this.themes.push(theme);
      this.themeCount++;
    }
    return theme;
  }

  setActiveTheme(theme) {
    if (this.activeTheme != null) {
      this.activeTheme.disable();
    }
    this.activeTheme = theme;
    this.activeTheme.apply();
  }

  getActiveTheme() {
    return this.activeTheme;
  }

  getThemes() {
    return this.themes;
  }

  getThemeCount() {
    return this.themeCount;
  }

  genRanId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  deleteTheme(theme) {
    if (this.themeCount > 1 || force == true) {
      for (let i = 0; i < this.themes.length; i++) {
        if (this.themes[i].id == theme.id) {
          this.themes.splice(i, 1);
          this.themeCount--;
          if (this.activeTheme.id == theme.id) {
            this.setActiveTheme(this.themes[0]);
          }
        }
      }
    }
  }

  deleteThemes(themes) {
    if (this.themeCount > 1) {
      for (let i = 0; i < themes.length; i++) {
        this.deleteTheme(themes[i]);
      }
    }
  }

  genCSS(css) {
    var style = document.createElement("style");
    style.innerHTML = css;
    style.disabled = true;
    document.head.appendChild(style);
    return style;
  }

  genCSSFile(url, enabled) {
    for (let i = 0; i < this.themes.length; i++) {
      if (
        this.themes[i].getCSSElem() &&
        this.themes[i].getCSSElem().href == url
      ) {
        console.error("A theme with the url " + url + " already exists!");
        return;
      }
    }
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
    link.disabled = true;
    if (enabled) link.disabled = false;
    return link;
  }

  getConfig() {
    return this.config;
  }
}

class Theme {
  constructor(elem, name) {
    if (typeof elem == "object") {
      this.csselem = elem;
    } else {
      this.url = elem;
    }
    this.store = elem;
    this.name = name;
    // check for a duplicate theme
    for (let i = 0; i < tHs.getThemes().length; i++) {
      if (tHs.getThemes()[i].getName() == this.name) {
        console.error(
          "A theme with the name " + this.name + " already exists!"
        );
        delete this;
        return;
      }
    }
  }

  apply() {
    if (typeof this.store == "object") {
      this.csselem.disabled = false;
    } else {
      this.csselem = tHs.genCSSFile(this.url, true);
    }
  }

  disable() {
    if (typeof this.store == "object") {
      this.csselem.disabled = true;
    } else {
      this.csselem.remove();
      this.csselem = null;
    }
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getURL() {
    return this.url;
  }

  setURL(url) {
    this.url = url;
  }

  getCSSElem() {
    return this.csselem;
  }

  setCSSElem(elem) {
    this.csselem = elem;
  }
}
