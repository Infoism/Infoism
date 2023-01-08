import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { STORAGE_KEYS } from '@/constant'

const defaultSidebar = [
  {
    icon: 'i-carbon-logo-vue',
    path: '/vue'
  },
  {
    icon: 'i-clarity-search-line',
    path: '/search'
  },
  {
    icon: 'i-clarity-favorite-line',
    path: '/favorite'
  },
  {
    icon: 'i-carbon-recently-viewed',
    path: '/recent'
  }
]

export const useSidebarStore = defineStore('sidebar', () => {
  const sidebarOptions = useStorage(STORAGE_KEYS.SIDEBAR_OPTIONS, defaultSidebar, localStorage)
  return { sidebarOptions }
})
