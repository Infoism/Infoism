import { defineStore } from 'pinia'
import { loadPluginsMicroapp } from '@/services/plugins'

export const usePluginsMicroapp = defineStore('plugin', () => {
  const pluginsMicroapp = reactive(loadPluginsMicroapp())
  return pluginsMicroapp
})
