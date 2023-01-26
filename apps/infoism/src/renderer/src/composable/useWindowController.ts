import { useEvent } from '@/services/event/useEvent'
import { bridge, EVENT_NAMES } from '@infoism/lib'
import { Ref } from 'vue'

export async function useIsWindowMaximized(targetRef: Ref) {
  targetRef.value = (await bridge.isMaximized()) as boolean
  useEvent(EVENT_NAMES.MAXIMIZE, () => {
    targetRef.value = true
  })
  useEvent(EVENT_NAMES.UNMAXIMIZE, () => {
    targetRef.value = false
  })
  return targetRef
}
