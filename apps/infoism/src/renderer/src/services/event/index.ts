import { EVENT_NAMES, triggerEvents } from '@infoism/lib'

export function injectEventListeners() {
  Object.values(EVENT_NAMES).forEach((eventName) => {
    window.electron.ipcRenderer.on(`event:${eventName}`, () => {
      triggerEvents(eventName)
    })
  })
}
