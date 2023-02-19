import { ipcRenderer } from 'electron'

// 窗口相关Bridge
type WindowControlChannels = 'close' | 'minimize' | 'maximize' | 'unmaximize' | 'isMaximized'
// 网络请求相关Bridge
type RequestChannels = 'fetchGithubFile'
type IPCChannels = WindowControlChannels | RequestChannels

function invokeMethodGenerator(channel: IPCChannels) {
  return async (...args) => {
    const res = await ipcRenderer.invoke(channel, ...args)
    return res
  }
}

function initPreloadApi() {
  return {
    // 窗口相关Bridge
    close: invokeMethodGenerator('close'),
    minimize: invokeMethodGenerator('maximize'),
    maximize: invokeMethodGenerator('maximize'),
    unMaximize: invokeMethodGenerator('unmaximize'),
    isMaximized: invokeMethodGenerator('isMaximized'),
    // 请求
    fetchGithubFile: invokeMethodGenerator('fetchGithubFile')
  }
}

const api = initPreloadApi()

export default api
