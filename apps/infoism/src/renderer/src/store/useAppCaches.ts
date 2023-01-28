import { defineStore } from 'pinia'
type Cache = {
  fullPath: string
}
export const useAppCaches = defineStore('appCaches', () => {
  const appCachesMap = reactive<Record<string, Cache>>({})
  return { appCachesMap }
})
