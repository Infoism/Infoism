import { STORAGE_KEYS } from '@/constant'
import { loadPluginsMicroapp } from '@/services/plugins'
import '@vueuse/shared'

export type ButtonOption = {
  name: string
  icon: string
  path?: string
  activeRule?: string | RegExp
}

export type buttonGroupOptions = ButtonOption[]

export function generateDefaultSidebar() {
  const plugins = loadPluginsMicroapp()
  return plugins.map((plugin) => ({
    name: plugin.name,
    icon: plugin.icon,
    path: '/' + plugin.name
  }))
}

export function useSidebar() {
  const defaultSidebar = generateDefaultSidebar()
  const sidebarOptions = useStorage(STORAGE_KEYS.SIDEBAR_OPTIONS, defaultSidebar, localStorage)
  return { sidebarOptions }
}
