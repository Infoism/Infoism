import { createInstanceNamespace, NAMESPACES } from 'src/utils/proxyHandlers'
export enum EVENT_NAMES {
  CLOSE = 'close',
  MAXIMIZE = 'maximize',
  MINIMIZE = 'minimize',
  UNMAXIMIZE = 'unmaximize'
}

export interface IEvent extends Record<EVENT_NAMES, () => void> {
  listen: () => void
}

export const initEventObject = {
  listen() {
    console.log(this.listen, 'this')
  }
}

export const Event = createInstanceNamespace<IEvent>(NAMESPACES.EVENT)
