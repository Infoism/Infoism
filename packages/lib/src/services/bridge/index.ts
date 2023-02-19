import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'

type Bridge<T extends any[] = [], U = void> = (...args: T) => Promise<U>

// 窗口相关Bridge
const WindowControlChannels = [
  'close',
  'minimize',
  'maximize',
  'unmaximize',
  'isMaximized'
] as const
type IBridgeWindowControl = Record<IPCChannels, Bridge> & {
  isMaximized: Bridge<[], boolean>
}

// 插件相关bridge
const PluginsChannels = ['downloadPlugin'] as const
type IBridgePlugins = {
  downloadPlugins: (repo: string, callback?: (progress: number) => void) => Promise<void>
}

export const IPCChannelsArr = [...WindowControlChannels, ...PluginsChannels] as const
export type IPCChannels = (typeof IPCChannelsArr)[number]

interface IBridge extends IBridgeWindowControl, IBridgePlugins {}

export const bridge: IBridge = createInstanceNamespace<IBridge>(NAMESPACES.BRIDGE)
export const injectBridge = (bridgeName: IPCChannels, cb: Bridge<any[], any>) => {
  bridge[bridgeName] = cb
}
