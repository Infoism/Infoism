import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'

export enum BRIDGE_NAMES {
  CLOSE = 'close',
  MAXIMIZE = 'maximize',
  MINIMIZE = 'minimize',
  UN_MAXIMIZE = 'unmaximize',
  IS_MAXIMIZED = 'isMaximized'
}

interface IBridge extends Record<BRIDGE_NAMES, () => unknown> {}
type Bridge = (...args: any[]) => void

export const bridge = createInstanceNamespace<IBridge>(NAMESPACES.BRIDGE)
export const injectBridge = (bridgeName: BRIDGE_NAMES, cb: Bridge) => {
  bridge[bridgeName] = cb
}
