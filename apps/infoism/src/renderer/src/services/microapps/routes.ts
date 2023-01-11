import { loadPlugins } from './plugins'
import Versions from '@/components/Versions.vue'

export function generateRoute() {
  const plugins = loadPlugins()
  return plugins.map((plugin) => ({
    path: '/' + plugin.name,
    name: plugin.name,
    component: Versions
  }))
}
