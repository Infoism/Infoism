import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'
import { IEvent, initEventScope } from '../event'

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
  if (microApps[appName]) {
    throw Error(
      `${appName} is already exist! Please check if you called "registerMicroApp()" twice or use another app name.`
    )
  }
  microApps[appName] = config
  const event = initEventScope(appName)
  return {
    event
  }
}
