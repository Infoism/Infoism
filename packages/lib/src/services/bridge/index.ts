import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'

export enum BRIDGES {
  CLOSE = 'close',
  MAXIMIZE = 'maximize',
  MINIMIZE = 'minimize',
  UNMAXIMIZE = 'unmaximize'
}

interface IBridge extends Record<BRIDGES, () => void> {}
type Bridge = (...args: any[]) => void

export const bridge = createInstanceNamespace<IBridge>(NAMESPACES.BRIDGE)
export const injectBridge = (bridgeName: BRIDGES, cb: Bridge) => {
  bridge[bridgeName] = cb
}
