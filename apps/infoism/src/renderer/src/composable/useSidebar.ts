import { STORAGE_KEYS } from '@/constant'
import { loadPlugins } from '@/services/microapps'
import '@vueuse/shared'

export type buttonOption = {
  icon: string
  path?: string
  activeRule?: string | RegExp
}

export type buttonGroupOptions = buttonOption[]

export function generateDefaultSidebar() {
  const plugins = loadPlugins()
  return plugins.map((plugin) => ({
    icon: plugin.icon,
    path: '/' + plugin.name
  }))
}

const defaultSidebar = generateDefaultSidebar()

export function useSidebar() {
  const sidebarOptions = useStorage(STORAGE_KEYS.SIDEBAR_OPTIONS, defaultSidebar, localStorage)
  return { sidebarOptions }
}
