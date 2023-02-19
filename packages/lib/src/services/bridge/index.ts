import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'

// 窗口相关Bridge
const WindowControlChannels = [
  'close',
  'minimize',
  'maximize',
  'unmaximize',
  'isMaximized'
] as const
// 网络请求相关Bridge
const RequestChannels = ['fetchGithubFile'] as const
export const IPCChannelsArr = [...WindowControlChannels, ...RequestChannels] as const
export type IPCChannels = (typeof IPCChannelsArr)[number]

interface IBridge extends Record<IPCChannels, Bridge> {}
type Bridge = (...args: any[]) => Promise<unknown>

export const bridge: IBridge = createInstanceNamespace<IBridge>(NAMESPACES.BRIDGE)
export const injectBridge = (bridgeName: IPCChannels, cb: Bridge) => {
  bridge[bridgeName] = cb
}
