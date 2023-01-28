import { loadPlugins } from './plugins'

export * from './plugins'

export function generateMicroAppsConfiguration() {
  const plugins = loadPlugins()
  return plugins.map((plugin) => ({
    name: plugin.name,
    entry: plugin.entry,
    activeRule: '/' + plugin.name,
    container: '#' + plugin.name
  }))
}
