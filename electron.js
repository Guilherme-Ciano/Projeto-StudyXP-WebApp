const { app, BrowserWindow } = require("electron");

let win;
function createWindow() {
  win = new BrowserWindow({
    height: 600,
    width: 600,
    backgroundColor: "#ffffff",
  });
  win.loadURL(`file://${__dirname}/dist/xpLearn/index.html`);
  win.on("closed", function () {
    win = null;
  });
}

app.on("ready", createWindow);
