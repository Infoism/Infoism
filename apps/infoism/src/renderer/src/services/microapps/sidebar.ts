import { loadPlugins } from './plugins'

export function generateDefaultSidebar() {
  const plugins = loadPlugins()
  return plugins.map((plugin) => ({
    icon: plugin.icon,
    path: '/' + plugin.name
  }))
}
