import { effect, ref } from 'vue'
import { EVENT_NAMES, globalEvent } from '@infoism/lib'

export function useEvent(
  eventName: EVENT_NAMES,
  listener: (e?: unknown) => void,
  initValue = true
) {
  let removeListener: undefined | (() => void) = () => {}
  const flag = ref(initValue)
  effect(() => {
    if (flag.value) {
      removeListener = globalEvent.listen(eventName, listener)
    } else {
      removeListener?.()
    }
  })
  return flag
}
