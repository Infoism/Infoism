import infoism from '../infoism'

export enum NAMESPACES {
  MICRO_APP = 'microApp',
  BRIDGE = 'bridge'
}

type ProxyTarget = Record<NAMESPACES, any>

export function createInstanceHandler(namespace: NAMESPACES) {
  return {
    get(infoism: ProxyTarget, key: string) {
      return infoism[namespace][key]
    },
    set(infoism: ProxyTarget, key: string, value: unknown): boolean {
      if (!infoism[namespace]) {
        infoism[namespace] = {}
      }
      infoism[namespace][key] = value
      return true
    }
  }
}

export function createInstanceNamespace<T>(namespace: NAMESPACES) {
  const namespaceProxy = new Proxy(infoism, createInstanceHandler(namespace))
  return namespaceProxy as T
}
