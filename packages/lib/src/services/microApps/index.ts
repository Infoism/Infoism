import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'
import { IEvent, initEventObject } from '../event'

interface IMicroAppConfig {
  name?: string
}
interface IMicroApps extends Record<string, IMicroAppConfig> {}

export const microApps = createInstanceNamespace<IMicroApps>(NAMESPACES.MICRO_APP)
interface IRegisterMicroAppReturns {
  event: IEvent
}
export const registerMicroApp = (
  appName: string,
  config: IMicroAppConfig
): IRegisterMicroAppReturns => {
  microApps[appName] = config
  const event = createInstanceNamespace<IEvent>(NAMESPACES.EVENT, {
    scope: appName,
    initValue: initEventObject
  })
  return {
    event
  }
}
