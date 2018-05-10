const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#ffffff",
    icon: `file://${__dirname}/dist/MasterManager/favicon.ico`
  });

  // and load the index.html of the app.
  win.loadURL(url.format({
      pathname: path.join(__dirname, "/dist/MasterManager/index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.on("closed", function() {
    win = null;
  });
}

app.on("ready", createWindow);
