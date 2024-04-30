// OP TAB SYSTEM V2.2.0

// LICENSE:
/*

        Copyright (c) 2023 Code-Alt
    	
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.

*/

// DOCS:

// here are some prerequisites:
// you must have a tab container, a btn container, a tab template, and a btn template, and a search bar.
// btw this might be hard to set up, set up your own classes and CSS until you find it satisfactory.

// new TabSystem() - Initializes the TabSystem class, used for holding all the information about the tab system, and it's functions.
// TabSystem.addTab(tab) - Adds a tab to the tab system. Returns the tab.
// TabSystem.getTabTemplate() - Returns the tab template.
// TabSystem.getBtnTemplate() - Returns the tab button template.
// TabSystem.createTabBtn(id) - Creates a tab button with the specified id. Returns the tab button.
// TabSystem.createTabFrame(id) - Creates a tab frame with the specified id. Returns the tab frame.
// TabSystem.setActiveTab(tab) - Sets the active tab to the specified tab.
// TabSystem.getActiveTab() - Returns the active tab.
// TabSystem.getTabs() - Returns all tabs.
// TabSystem.getTabCount() - Returns the amount of tabs.
// TabSystem.genRanId() - Generates a random id. Returns the id.
// TabSystem.deleteTab(tab, force) - Deletes the specified tab. If force is true, it will delete the tab even if it's the last tab.
// TabSystem.deleteTabs(tabs, force) - Deletes the specified tabs. If force is true, it will delete the tabs even if it's the last tab.
// TabSystem.deleteAllTabs() - Deletes all tabs.
// TabSystem.deleteAllTabsExcept(tab) - Deletes all tabs except the specified tab.
// TabSystem.deleteAllTabsExceptThese(tabs) - Deletes all tabs except the specified tabs.
// new Tab() - Initializes the Tab class, used for holding all the information about the tab frame and the button used to activate it.
// Tab.getConnectedElement() - Returns the connected element.
// Tab.getTabElement() - Returns the tab element.
// Tab.setTabElement(tabElement) - Sets the tab element.
// Tab.setConnectedElement(connectedElement) - Sets the connected element.

var dp = "Starting Page";
var conf = {};
var mainTS;
var _OPTabSys_callbacks = {
  tabChange: [],
  tabAdd: [],
  tabDelete: [],
};

class TabSystem {
  constructor(object) {
    this.config = {
      tabContainer:
        object.tabContainer || document.getElementById("tabContainer"),
      tabTemplate: object.tabTemplate || document.getElementById("tabTemplate"),
      btnTemplate: object.btnTemplate || document.getElementById("btnTemplate"),
      tabBtnContainer:
        object.tabBtnContainer || document.getElementById("tabBtnContainer"),
      URLBar: object.URLBar || document.getElementById("adrbar"),
      defaultPlaceholder: object.defaultPlaceholder || "Starting Page",
      closePlaceholder: object.closePlaceholder || "No tab open",
      tabActiveClass: object.tabActiveClass || "op-tabs-active",
    };
    conf = this.config;
    dp = this.config.defaultPlaceholder;
    this.tabs = [];
    this.tabCount = 0;
    this.activeTab = null;
    this.config.tabTemplate.style.display = "none";
    this.config.btnTemplate.style.display = "none";
    mainTS = this;
  }

  on(event, callback) {
    switch (event) {
      case "tabChange":
        if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};
        if (_OPTabSys_callbacks.tabChange == null)
          _OPTabSys_callbacks.tabChange = [];
        _OPTabSys_callbacks.tabChange.push(callback);
        break;
      case "tabAdd":
        if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};
        if (_OPTabSys_callbacks.tabAdd == null) _OPTabSys_callbacks.tabAdd = [];
        _OPTabSys_callbacks.tabAdd.push(callback);
        break;
      case "tabDelete":
        if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};
        if (_OPTabSys_callbacks.tabDelete == null)
          _OPTabSys_callbacks.tabDelete = [];
        _OPTabSys_callbacks.tabDelete.push(callback);
        break;
      default:
        return console.error("Invalid event!");
    }
  }

  addTab(tab) {
    this.tabs.push(tab);
    this.tabCount++;
    if (_OPTabSys_callbacks != null) {
      if (_OPTabSys_callbacks.tabAdd != null) {
        for (var i = 0; i < _OPTabSys_callbacks.tabAdd.length; i++) {
          _OPTabSys_callbacks.tabAdd[i](tab);
        }
      }
    }
    return tab;
  }

  getTabTemplate() {
    return this.config.tabTemplate;
  }

  getBtnTemplate() {
    return this.config.btnTemplate;
  }

  createTabBtn(id) {
    const btn = this.getBtnTemplate().cloneNode(true);
    if (id == null) id = "";
    btn.id = id;
    btn.style = btn.style.toString().replace(/display:( )*none(;){0,1}/g, "");
    this.config.tabBtnContainer.appendChild(btn);
    btn.style.width = "0px";
    btn.style.opacity = "0";
    setTimeout(() => {
      btn.style.width = "235px";
      btn.style.opacity = "1";
    }, 0);
    return btn;
  }

  createTabFrame(id) {
    const frame = this.getTabTemplate().cloneNode(true);
    if (id == null) id = "";
    frame.id = id;
    frame.style.display = "none";
    this.config.tabContainer.appendChild(frame);
    return frame;
  }

  setActiveTab(tab) {
    if (_OPTabSys_callbacks != null) {
      if (_OPTabSys_callbacks.tabChange != null) {
        for (var i = 0; i < _OPTabSys_callbacks.tabChange.length; i++) {
          _OPTabSys_callbacks.tabChange[i](tab);
        }
      }
    }
    if (!this.tabs.includes(tab) && tab != null) {
      this.addTab(tab);
    }
    if (this.activeTab != null) {
      this.activeTab.getConnectedElement().classList.remove(this.config.tabActiveClass);
      this.activeTab.setSearchBarContent(this.config.URLBar.value);
      this.activeTab.setPlaceholder(this.config.URLBar.placeholder);
    }
    this.config.URLBar.value = "";
    if (tab != null && tab.getSearchBarContent()) {
      this.config.URLBar.value = tab.getSearchBarContent();
    }
    this.activeTab = tab;
    if (tab != null && this.activeTab.getPlaceholder()) {
      this.config.URLBar.placeholder = this.activeTab.getPlaceholder();
    }
    if (this.activeTab == null) {
      this.config.URLBar.placeholder = this.config.closePlaceholder;
    }
    for (var t = 0; t < this.tabs.length; t++) {
      if (this.tabs[t] == tab && tab != null) {
        if (this.tabs[t].tabElement != null) {
          this.tabs[t].tabElement.style.display = "initial";
        }
        if (this.tabs[t].connectedElement != null) {
          this.tabs[t].connectedElement.classList.add(this.config.tabActiveClass);
        }
      } else {
        if (this.tabs[t].tabElement != null && tab != null) {
          this.tabs[t].tabElement.style.display = "none";
        }
        if (this.tabs[t].connectedElement != null && tab != null) {
          this.tabs[t].connectedElement.classList.remove(this.config.tabActiveClass);
        }
      }
    }
  }

  getActiveTab() {
    return this.activeTab;
  }

  getTabs() {
    return this.tabs;
  }

  getTabCount() {
    return this.tabCount;
  }

  genRanId() {
    return Date.now() + Math.floor(Math.random() * 1000000000);
  }

  deleteTab(tab, force) {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] == tab) {
        if (this.tabs[i] == this.activeTab) {
          if (this.tabs[i - 1] != null) {
            this.setActiveTab(this.tabs[i - 1]);
          } else if (this.tabs[i + 1] != null) {
            this.setActiveTab(this.tabs[i + 1]);
          } else {
            if (force != true) {
              return alert("You can't delete the last tab!");
            } else {
              this.setActiveTab(null);
            }
          }
        }
        this.tabs[i].connectedElement.remove();
        this.tabs[i].tabElement.remove();
        this.tabs.splice(i, 1);
        this.tabCount--;
        if (_OPTabSys_callbacks != null) {
          if (_OPTabSys_callbacks.tabDelete != null) {
            for (var tC = 0; tC < _OPTabSys_callbacks.tabDelete.length; tC++) {
              _OPTabSys_callbacks.tabDelete[tC](this.activeTab);
            }
          }
        }
        break;
      }
    }
  }

  deleteTabs(tabs) {
    const tabsToDelete = tabs.slice();
    for (let i = 0; i < tabsToDelete.length; i++) {
      const tab = tabsToDelete[i];
      if (tab === this.activeTab) {
        if (this.tabs[i - 1]) {
          this.setActiveTab(this.tabs[i - 1]);
        } else if (this.tabs[i + 1]) {
          this.setActiveTab(this.tabs[i + 1]);
        } else {
          this.setActiveTab(null);
        }
      }
      tab.connectedElement.remove();
      tab.tabElement.remove();
      this.tabs.splice(this.tabs.indexOf(tab), 1);
      this.tabCount--;
    }
    if (_OPTabSys_callbacks?.tabDelete) {
      _OPTabSys_callbacks.tabDelete.forEach((callback) =>
        callback(this.activeTab)
      );
    }
  }

  deleteAllTabs() {
    this.deleteTabs(this.tabs);
  }

  deleteAllTabsExcept(tab) {
    const tabsToDelete = this.tabs.slice();
    tabsToDelete.splice(tabsToDelete.indexOf(tab), 1);
    this.deleteTabs(tabsToDelete);
  }

  deleteAllTabsExceptThese(tabs) {
    const tabsToDelete = this.tabs.slice();
    tabsToDelete.forEach((tab) => {
      if (tabs.includes(tab)) {
        tabsToDelete.splice(tabsToDelete.indexOf(tab), 1);
      }
    });
    this.deleteTabs(tabsToDelete);
  }

  getConfig() {
    return this.config;
  }
}

class Tab {
  constructor(connectedElement, tabFrame, searchBarContent, placeholder) {
    this.connectedElement =
      connectedElement || mainTS.createTabBtn(mainTS.genRanId());
    this.tabElement = tabFrame || mainTS.createTabFrame(mainTS.genRanId());
    if (searchBarContent == null) searchBarContent = "";
    this.searchBarContent = searchBarContent;
    if (placeholder == null) placeholder = dp;
    this.placeholder = placeholder;
    this.connectedElement.addEventListener("click", () => {
      if (window.tryClose) {
        this.connectedElement.style.width="0px";
        this.connectedElement.style.opacity="0";
        window.setTimeout(() => {
          mainTS.deleteTab(this, window.allowForce);
          window.tryClose = false;
        }, 200);
        return;
      }
      mainTS.setActiveTab(this);
    });
  }

  getConnectedElement() {
    return this.connectedElement;
  }

  getTabElement() {
    return this.tabElement;
  }

  setSearchBarContent(searchBarContent) {
    this.searchBarContent = searchBarContent;
  }

  getSearchBarContent() {
    return this.searchBarContent;
  }

  findFirstIFrame() {
    return this.tabElement.querySelector("iframe");
  }

  hasIFrame() {
    if (this.findIFrame() != null) {
      return true;
    } else {
      return false;
    }
  }

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
  }

  getPlaceholder() {
    return this.placeholder;
  }
}

window.TabSystem = TabSystem;
window.Tab = Tab;
window.allowForce = true;
