import { injectBridge, IPCChannelsArr, IPCChannels } from '@infoism/lib'

function bridgeGenerator(channel: string) {
  return async (...args) => {
    const res = await window.electron.ipcRenderer.invoke(channel, ...args)
    return res
  }
}

function injection(channel: IPCChannels) {
  injectBridge(channel, bridgeGenerator(channel))
}

export function injectBridges() {
  IPCChannelsArr.forEach((chanel) => {
    injection(chanel)
  })
}
