import { effect, ref } from 'vue'
import { event, EVENT_NAMES } from '../registerMicroApp'

export function useEvent(
  eventName: EVENT_NAMES,
  listener: (e?: unknown) => void,
  initValue = true
) {
  let removeListener: undefined | (() => void) = () => {}
  const flag = ref(initValue)
  effect(() => {
    if (flag.value) {
      removeListener = event.listen(eventName, listener)
    } else {
      removeListener?.()
    }
  })
  return flag
}
