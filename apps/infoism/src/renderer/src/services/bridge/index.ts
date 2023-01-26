import { injectBridge, BRIDGES } from '@infoism/lib'

function bridgeGenerator(channel: string) {
  return async () => {
    const res = await window.electron.ipcRenderer.invoke(channel)
    console.log(`bridge invoked: ${channel} -> `, res)
    return res
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
