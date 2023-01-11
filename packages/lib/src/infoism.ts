const infoismHandler = {}

type eventCallbackFn = (_event: unknown) => {}

interface iInfoism {
  on: {
    enter: (cb: eventCallbackFn) => void
    leave: (cb: eventCallbackFn) => void
  }
}

const rawInfoismInstance: iInfoism = {
  on: {
    enter() {
      return
    },
    leave() {
      return
    }
  }
}

/**
 * get the global infoism instance
 * @returns global infoism api instance
 */
export function getInfoismInstance(): iInfoism {
  if (window.__infoism_instance) {
    return window.__infoism_instance
  }
  const infoism = new Proxy<iInfoism>(rawInfoismInstance, infoismHandler)
  window.__infoism_instance = infoism
  return infoism
}

export default getInfoismInstance()
