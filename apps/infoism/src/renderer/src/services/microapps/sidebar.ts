import { usePluginsMicroapp } from '../../store/usePlugins'

export function generateDefaultSidebar() {
  const plugins = usePluginsMicroapp()
  return plugins.map((plugin) => ({
    icon: plugin.icon,
    path: '/' + plugin.name
  }))
}
