import { ipcMain } from 'electron'

/**
 * 初始化bridge
 * @param mainWindow 窗口实例
 * @returns void
 */
export default function initApiHandlers(mainWindow) {
  const { handle } = ipcMain
  // 关闭窗口
  handle('close', () => {
    mainWindow?.close()
  })
  // 最大化
  handle('maximize', () => {
    mainWindow?.maximize()
  })
  // 最小化
  handle('minimize', () => {
    mainWindow?.minimize()
  })
  // 窗口化
  handle('unmaximize', () => {
    mainWindow?.unmaximize()
  })
  // 判断窗口是否最大化
  handle('isMaximized', () => {
    return mainWindow.isMaximized()
  })
  return
}
