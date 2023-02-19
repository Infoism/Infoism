const eventsWindowController = ['close', 'maximize', 'minimize', 'unmaximize']

/**
 * 初始化事件监听器
 * @param mainWindow 窗口实例
 * @returns void
 */
export default function initEventListeners(mainWindow) {
  const { webContents } = mainWindow
  // windows窗口控制事件
  eventsWindowController.forEach((eventName) => {
    mainWindow.on(eventName, (_e) => {
      webContents.send(`event:${eventName}`)
    })
  })
  return
}
