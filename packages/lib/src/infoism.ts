const infoismHandler = {}

export interface iInfoism extends Record<any, any> {}

const rawInfoismInstance: iInfoism = {}

/**
 * get the global infoism instance
 * @returns global infoism api instance
 */
export function getInfoismInstance(): iInfoism {
  if (window.parent.__infoism_instance) {
    return window.parent.__infoism_instance
  }
  const infoism = new Proxy<iInfoism>(rawInfoismInstance, infoismHandler)
  window.parent.__infoism_instance = infoism
  return infoism
}

export default getInfoismInstance()
