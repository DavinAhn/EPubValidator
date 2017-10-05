const { BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let main;

module.exports = {
  create(filePath, config = this.defaultConfig) {
    const win = new BrowserWindow(config);
    win.loadURL(url.format({
      pathname: filePath,
      protocol: 'file:',
      slashes: true,
    }));
    return win;
  },

  mainMinWidth: 600,
  mainMinHeight: 352,

  defaultConfig: {
    x: undefined,
    y: undefined,
    width: 600,
    minWidth: this.mainMinWidth,
    height: 352,
    minHeight: this.mainMinHeight,
    minimizable: true,
    maximizable: false,
    fullscreenable: false,
    show: false,
    frame: false,
    backgroundColor: '#1e2028',
  },

  updateSize(size, win) {
    const bounds = win.getBounds();
    bounds.width = size.width || bounds.width;
    bounds.height = size.height || bounds.height;

    if (win === this.getMain()) {
      bounds.width = Math.max(bounds.width, this.mainMinWidth);
      bounds.height = Math.max(bounds.height, this.mainMinHeight);
    }

    const workArea = require('electron').screen.getPrimaryDisplay().workArea;
    bounds.width = Math.min(bounds.width, workArea.width);
    bounds.height = Math.min(bounds.height, workArea.height);

    if ((bounds.y + bounds.height) > (workArea.y + workArea.height)) {
      bounds.y = workArea.y + ((workArea.height - bounds.height) / 2);
    }

    win.setBounds(bounds, true);
  },

  getMain: () => main,

  loadMain() {
    const filePath = path.join(__dirname, '../../index.html');
    const win = this.create(filePath, this.defaultConfig);
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      main = null;
    });
    win.once('ready-to-show', () => {
      win.show();
    });

    main = win;
    return win;
  },
};
