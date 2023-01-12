import { ipcRenderer } from 'electron'

enum IPCChannels {
  CLOSE = 'close',
  MINIMIZE = 'minimize',
  MAXIMIZE = 'maximize',
  UN_MAXIMIZE = 'unMaximize'
}
function invokeMethodGenerator(channel: IPCChannels) {
  return () => {
    ipcRenderer.invoke(channel)
  }
}

function initPreloadApi(): PreloadApi {
  return {
    close: invokeMethodGenerator(IPCChannels.CLOSE),
    minimize: invokeMethodGenerator(IPCChannels.MINIMIZE),
    maximize: invokeMethodGenerator(IPCChannels.MAXIMIZE),
    unMaximize: invokeMethodGenerator(IPCChannels.UN_MAXIMIZE)
  }
}

const api = initPreloadApi()

export default api
