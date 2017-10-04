const { app, Menu, ipcMain } = require('electron');
const path = require('path');
const win = require('./src/electron/window');
const verfiy = require('./src/electron/verfiy');

// Load contents of all active BrowserWindows within electron
// when the source files are changed.
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit',
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  win.loadMain().webContents.openDevTools();

  // Remove all default menu.
  Menu.setApplicationMenu(null);
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

ipcMain.on('verfiy', (event, args) => {
  verfiy.run(args.path, args.mimeType, (result) => {
    event.sender.send('verified', result);
  });
});
