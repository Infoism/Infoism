import { injectBridge, BRIDGES } from '@infoism/lib'

function bridgeGenerator(channel: string) {
  return () => {
    window.electron.ipcRenderer.invoke(channel)
  }
}

function injection(channel: BRIDGES) {
  injectBridge(channel, bridgeGenerator(channel))
}

export function injectBridges() {
  Object.values(BRIDGES).forEach((chanel) => {
    injection(chanel)
  })
}
