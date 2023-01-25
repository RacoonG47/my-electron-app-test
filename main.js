const { app, BrowserWindow } = require('electron')
require('update-electron-app')()
const {autoUpdater} = require('electron-updater')
const log = require('electron-log')

log.transports.file.resolvePath = () => path.join('my-electron-app\package.json', 'logs/main.log');
log.info('Hello, log');
log.warn('Some problem appears');


let win;
//const path = require('C:\\Users\\anfi\\Desktop\\electron-application\\my-electron-app\\preload.js')
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 6007/*,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }*/
    })
  
    //win.loadFile('index.html')
    //win.loadFile('C:\\Users\\anfi\\Desktop\\electron-application\\my-electron-app\\src\\index.html')
    win.loadFile('src\\app\\app.component.html')
  }
  
  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        autoUpdater.checkForUpdatesAndNotify()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

autoUpdater.on("update-available", ()=>{
  log.info("update-available")
})

autoUpdater.on("checking-for-update", ()=>{
  log.info("checking-for-update")
})

autoUpdater.on("download-progress", ()=> {
  log.info("download-progress")
})

autoUpdater.on("update-downloaded",()=>{
  log.info("update-downloaded")
})

  /*
  autoUpdater.setFeedURL("https://github.com/RacoonG47/my-electron-app.git")
  autoUpdater.getFeedURL("https://github.com/RacoonG47/my-electron-app.git")
  autoUpdater.checkForUpdates()
  autoUpdater.quitAndInstall()
  */
