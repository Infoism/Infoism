import { ipcRenderer } from 'electron'

enum IPCChannels {
  CLOSE = 'close',
  MINIMIZE = 'minimize',
  MAXIMIZE = 'maximize',
  UN_MAXIMIZE = 'unmaximize',
  IS_MAXIMIZED = 'isMaximized'
}
function invokeMethodGenerator(channel: IPCChannels) {
  return async () => {
    const res = await ipcRenderer.invoke(channel)
    return res
  }
}

function initPreloadApi(): PreloadApi {
  return {
    close: invokeMethodGenerator(IPCChannels.CLOSE),
    minimize: invokeMethodGenerator(IPCChannels.MINIMIZE),
    maximize: invokeMethodGenerator(IPCChannels.MAXIMIZE),
    unMaximize: invokeMethodGenerator(IPCChannels.UN_MAXIMIZE),
    isMaximized: invokeMethodGenerator(IPCChannels.IS_MAXIMIZED)
  }
}

const api = initPreloadApi()

export default api
