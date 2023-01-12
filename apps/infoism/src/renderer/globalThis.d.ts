import { ElectronAPI } from '@electron-toolkit/preload'
import { PreloadApi as api, IPCChannels } from '@infoism/lib'

declare global {
  interface PreloadApi extends api {}
  interface Window {
    electron: ElectronAPI
    api: PreloadApi
  }
}

export {}
