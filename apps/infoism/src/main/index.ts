import { app, shell, BrowserWindow, protocol } from 'electron'
import * as path from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import installExtensions, {
  REACT_DEVELOPER_TOOLS,
  VUEJS3_DEVTOOLS
} from 'electron-devtools-installer'
import initApiHandlers from './services/bridge'
import initEventListeners from './services/event'

function createWindow(): void {
  // Create the browser window.

  const mainWindow = new BrowserWindow({
    width: 900,
    minWidth: 900,
    height: 670,
    minHeight: 670,
    frame: false,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: false
    }
  })

  protocol.interceptFileProtocol('file', (req, callback) => {
    const url = req.url.substring(8)
    callback(decodeURI(url))
  })

  // init preload api handlers
  initApiHandlers(mainWindow)

  // init event listeners
  initEventListeners(mainWindow)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.hookWindowMessage(278, function () {
    mainWindow.setEnabled(false) //窗口禁用
    setTimeout(() => {
      mainWindow.setEnabled(true)
    }, 100) //延时太快会立刻启动，太慢会妨碍窗口其他操作，可自行测试最佳时间
    return true
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  if (process.env.NODE_ENV === 'development') {
    installExtensions([REACT_DEVELOPER_TOOLS, VUEJS3_DEVTOOLS])
  }
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
