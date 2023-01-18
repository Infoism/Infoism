import { createInstanceNamespace, NAMESPACES } from '../../utils/proxyHandlers'

interface IMicroAppConfig {
  name?: string
}
interface IMicroApps extends Record<string, IMicroAppConfig> {}

export const microApps = createInstanceNamespace<IMicroApps>(NAMESPACES.MICRO_APP)
export const registerMicroApp = (appName: string, config: IMicroAppConfig) => {
  microApps[appName] = config
}
