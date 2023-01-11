import '@vueuse/shared'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { STORAGE_KEYS } from '@/constant'
import { generateDefaultSidebar } from '@/services/microapps/sidebar'

export type buttonOption = {
  icon: string
  path?: string
  activeRule?: string | RegExp
}

export type buttonGroupOptions = buttonOption[]

const defaultSidebar = generateDefaultSidebar()

export const useSidebarStore = defineStore('sidebar', () => {
  const sidebarOptions = useStorage(STORAGE_KEYS.SIDEBAR_OPTIONS, defaultSidebar, localStorage)
  return { sidebarOptions }
})
