import { loadPlugins } from './plugins'
import Placeholder from '@/components/Placeholder.vue'

export function generatePluginRoutes() {
  const plugins = loadPlugins()
  return plugins.map((plugin) => ({
    path: '/' + plugin.name,
    name: plugin.name,
    component: Placeholder
  }))
}
