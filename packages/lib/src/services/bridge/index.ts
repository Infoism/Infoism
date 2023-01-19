import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'

export enum BRIDGE_NAMES {
  CLOSE = 'close',
  MAXIMIZE = 'maximize',
  MINIMIZE = 'minimize',
  UNMAXIMIZE = 'unmaximize'
}

interface IBridge extends Record<BRIDGE_NAMES, () => void> {}
type Bridge = (...args: any[]) => void

export const bridge = createInstanceNamespace<IBridge>(NAMESPACES.BRIDGE)
export const injectBridge = (bridgeName: BRIDGE_NAMES, cb: Bridge) => {
  bridge[bridgeName] = cb
}
