import { defineStore } from 'pinia'
import { reactive } from 'vue'
type Cache = {
  fullPath: string
}
export const useAppCaches = defineStore('appCaches', () => {
  const appCachesMap = reactive<Record<string, Cache>>({})
  return { appCachesMap }
})
