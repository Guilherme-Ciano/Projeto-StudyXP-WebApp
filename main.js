const { app, BrowserWindow, nativeImage } = require("electron");

// Função que cria uma janela desktop
function createWindow() {
  // Adicionando um ícone na barra de tarefas/dock
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/dist/xpLearn/assets/Logo_Study.png`);

  if (app.dock) {
    app.dock.setIcon(icon);
  }

  // Cria uma janela de desktop
  const win = new BrowserWindow({
    width: 1440,
    height: 720,
    title: "StudyXP",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.webContents.clearHistory();
  const session = win.webContents.session;
  session.clearCache(() => {
    alert("Cache cleared!");
  });


  // carrega a janela com o conteúdo dentro de index.html
  win.loadFile(`index.html`);

  // Abre o console do navegador (DevTools),
  // win.webContents.openDevTools();
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // Esse evento é disparado pelo MacOS quando clica no ícone do aplicativo no Dock.
  // Basicamente cria a janela se não foi criada.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
