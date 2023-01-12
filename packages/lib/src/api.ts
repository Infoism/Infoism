export default {}
export interface PreloadApi {
  close: () => void
  minimize: () => void
  maximize: () => void
  unMaximize: () => void
}

export enum IPCChannels {
  CLOSE = 'close',
  MINIMIZE = 'minimize',
  MAXIMIZE = 'maximize',
  UN_MAXIMIZE = 'unMaximize'
}
