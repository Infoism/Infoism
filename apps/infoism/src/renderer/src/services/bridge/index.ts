import { injectBridge, IPCChannelsArr, IPCChannels } from '@infoism/lib'

type cb = (data: any) => void

const callbacks = {}

let cid = 1

function bridgeGenerator(channel: string) {
  return async (data, callback?: cb) => {
    let currCid: null | number = null
    if (typeof callback === 'function') {
      currCid = cid
      callbacks[currCid] = callback
      cid++
    }
    const res = await window.electron.ipcRenderer.invoke('bridge', channel, data, currCid)

    // console.info(`bridge invoked: ${channel} -> `, res)

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

  window.electron.ipcRenderer.on('bridge:callback', (_e, cid, ...args) => {
    callbacks[cid]?.(...args)
  })
}
