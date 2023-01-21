import { createInstanceNamespace, NAMESPACES } from 'src/utils/proxyHandlers'
export enum EVENT_NAMES {
  CLOSE = 'close',
  MAXIMIZE = 'maximize',
  MINIMIZE = 'minimize',
  UNMAXIMIZE = 'unmaximize'
}

type EventListener = (_event: unknown) => void

type EventStorage = {
  [k in EVENT_NAMES]?: EventListener[]
}

export interface IEvent extends EventStorage {
  listen: (
    eventName: EVENT_NAMES,
    listener: EventListener,
    options?: IEventListenerOptions
  ) => undefined | (() => void)
}

interface IEventListenerOptions {
  allowRepeat?: boolean
}

export const initEventObject: IEvent = {
  listen(eventName: EVENT_NAMES, listener: EventListener, options: IEventListenerOptions = {}) {
    const { allowRepeat } = options
    if (!this[eventName]) {
      this[eventName] = []
    }
    if (!allowRepeat && (this[eventName] as EventListener[]).find((v) => v === listener)) {
      console.warn(
        `Listeners prevent repeated listening by default, if you want to change this behavior, please use "listen(${eventName}, listener, { allowRepeat: true })" instead`
      )
      return
    }
    if (Array.isArray(this[eventName])) {
      ;(this[eventName] as EventListener[]).push(listener)
      const _this = this
      function removeListener() {
        const listenerIndex = (_this[eventName] as EventListener[]).findIndex((v) => v === listener)
        if (listenerIndex !== -1) {
          _this[eventName]?.splice(listenerIndex, 1)
        }
      }
      return removeListener
    }
  }
}

interface IEventWithScope extends Record<string, IEvent> {}

export const triggerEvents = function (eventName: EVENT_NAMES, payloads?: unknown, scope?: string) {
  if (!scope) {
    // trigger all events
    for (const scope in Event) {
      if (Object.prototype.hasOwnProperty.call(Event, scope)) {
        trigger(scope)
      }
    }
    return
  }
  trigger(scope)

  function trigger(scope: string) {
    const target = Event[scope]
    if (!target) {
      console.warn(`scope ${scope} is undefined`)
      return
    }
    const listeners = target[eventName]
    if (!Array.isArray(listeners)) {
      return
    }
    // trigger events
    listeners.forEach((listener) => {
      listener(payloads)
    })
  }
}

export const Event = createInstanceNamespace<IEventWithScope>(NAMESPACES.EVENT)
