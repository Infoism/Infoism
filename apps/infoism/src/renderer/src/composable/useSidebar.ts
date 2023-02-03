import { STORAGE_KEYS } from '@/constant'
import { loadPlugins } from '@/services/microapps/plugins'
import '@vueuse/shared'

export type ButtonOption = {
  name: string
  icon: string
  path?: string
  activeRule?: string | RegExp
}

export type buttonGroupOptions = ButtonOption[]

export function generateDefaultSidebar() {
  const plugins = loadPlugins()
  return plugins.map((plugin) => ({
    name: plugin.name,
    icon: plugin.icon,
    path: '/' + plugin.name
  }))
}

const defaultSidebar = generateDefaultSidebar()

export function useSidebar() {
  const sidebarOptions = useStorage(STORAGE_KEYS.SIDEBAR_OPTIONS, defaultSidebar, localStorage)
  return { sidebarOptions }
}
