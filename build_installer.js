const { MSICreator } = require("electron-wix-msi");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "release/win-unpacked");
const OUT_DIR = path.resolve(__dirname, "release/windows_installer");
const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  outputDirectory: OUT_DIR,
  description: "This is a demo application",
  exe: "angular-electron",
  name: "Angular Electron App",
  manufacturer: "João Vitor Pereira dos Santos",
  version: "1.0.0",
  ui: {
    chooseDirectory: true,
  },
});
msiCreator.create().then(function () {
  msiCreator.compile();
});
