const { BrowserWindow } = require('electron');
const settings = require('electron-settings');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let main;

module.exports = {
  create(pathname, config) {
    const win = new BrowserWindow(config);
    win.loadURL(url.format({
      pathname,
      protocol: 'file:',
      slashes: true,
    }));
    return win;
  },

  getMain: () => main,

  loadMain() {
    let config = {};

    if (settings.has('mainWindowState')) {
      config = Object.assign({}, config, settings.get('mainWindowState'));
    } else {
      settings.set('mainWindowState', {
        x: undefined,
        y: undefined,
        width: 600,
        minWidth: 600,
        height: 800,
        minHeight: 800,
        fullscreenable: false,
      });
    }

    const pathname = path.join(__dirname, '../../index.html');
    const win = this.create(pathname, config);
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      main = null;
    });

    main = win;
    return win;
  },
};
