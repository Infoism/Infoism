import { ipcMain } from 'electron'
import { downloadPlugin } from './plugins'

type cb = (...args: any[]) => void
type bridgeHandler = (data?: any, callback?: cb) => void
type cid = null | number
/**
 * 初始化bridge
 * @param mainWindow 窗口实例
 * @returns void
 */
export default function initApiHandlers(mainWindow) {
  const { handle } = ipcMain
  const bridges: Record<string, cb> = {}
  function collectBridge(channel: string, handler: bridgeHandler) {
    bridges[channel] = (data: any, callback: cb) => {
      return handler(data, callback)
    }
  }
  handle('bridge', async (_event, currentChannel: string, data: any, cid: cid) => {
    let callback = (..._args) => {}
    if (cid) {
      callback = (...args) => {
        mainWindow.webContents.send('bridge:callback', cid, ...args)
      }
    }
    const res = await bridges[currentChannel]?.(data, callback)
    return res
  })
  // 下载插件
  collectBridge('downloadPlugin', async (data, callback?: cb) => {
    return await downloadPlugin(data, callback)
  })
  // 关闭窗口
  collectBridge('close', () => {
    mainWindow?.close()
  })
  // 最大化
  collectBridge('maximize', () => {
    mainWindow?.maximize()
  })
  // 最小化
  collectBridge('minimize', () => {
    mainWindow?.minimize()
  })
  // 窗口化
  collectBridge('unmaximize', () => {
    mainWindow?.unmaximize()
  })
  // 判断窗口是否最大化
  collectBridge('isMaximized', () => {
    return mainWindow.isMaximized()
  })
  return
}
