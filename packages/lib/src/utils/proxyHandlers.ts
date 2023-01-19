import infoism from '../infoism'

export enum NAMESPACES {
  MICRO_APP = 'microApp',
  BRIDGE = 'bridge',
  EVENT = 'event'
}

type ProxyTarget = Object & Record<NAMESPACES, any>

interface IInterfaceHandlerOptions {
  scope?: string
  initValue?: unknown
}

export function createInstanceHandler(namespace: NAMESPACES) {
  return {
    get(instance: ProxyTarget, key: string) {
      if (!key) {
        return instance
      }
      return Reflect.get(instance, key)
    },
    set(instance: ProxyTarget, key: string, value: unknown): boolean {
      Reflect.set(instance, key, value)
      return true
    },
    deleteProperty(instance: ProxyTarget, key: string) {
      if (!(key in instance)) {
        return false
      }
      return Reflect.deleteProperty(instance, key)
    },
    ownKeys(instance: ProxyTarget) {
      return Object.keys(instance)
    },
    has(instance: ProxyTarget, key: string) {
      return key in instance
    }
  }
}

export function createInstanceNamespace<T>(
  namespace: NAMESPACES,
  options: IInterfaceHandlerOptions = {}
) {
  const { scope, initValue } = options
  if (initValue) {
    initInstance(initValue)
  } else {
    initInstance()
  }
  const instance = scope ? infoism?.[namespace]?.[scope] : infoism?.[namespace]
  function initInstance(_value = {}) {
    const instance = scope ? infoism?.[namespace]?.[scope] : infoism?.[namespace]
    if (instance) {
      return
    }
    if (!infoism[namespace]) {
      infoism[namespace] = scope ? {} : _value
    }
    if (scope && !infoism[namespace][scope]) {
      infoism[namespace][scope] = _value
    }
  }
  const namespaceProxy = new Proxy(instance, createInstanceHandler(namespace))
  return namespaceProxy as T
}
