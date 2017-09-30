const { app, Menu } = require('electron');
const win = require('./src/electron/window');
const menu = require('./src/electron/menu');

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  win.loadMain().webContents.openDevTools();

  const template = menu.create();
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  // load contents of all active BrowserWindows within electron
  // when the source files are changed.
  const autoReload = require('electron-reload');
  autoReload(__dirname);
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win.getMain() === null) {
    win.loadMain();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
