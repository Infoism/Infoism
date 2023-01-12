import { ipcMain } from 'electron'

enum IPCChannels {
  CLOSE = 'close',
  MINIMIZE = 'minimize',
  MAXIMIZE = 'maximize',
  UN_MAXIMIZE = 'unMaximize'
}
export default function initApiHandlers(mainWindow) {
  const { handle } = ipcMain
  handle(IPCChannels.CLOSE, () => {
    mainWindow?.close()
  })
  handle(IPCChannels.MAXIMIZE, () => {
    mainWindow?.maximize()
  })
  handle(IPCChannels.MINIMIZE, () => {
    mainWindow?.minimize()
  })
  handle(IPCChannels.UN_MAXIMIZE, () => {
    mainWindow?.unmaximize()
  })
  return
}
