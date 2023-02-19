import { defineStore } from 'pinia'
import { loadPluginsMicroapp } from '@/services/plugins'
import { reactive } from 'vue'

export const usePluginsMicroapp = defineStore('plugin', () => {
  const pluginsMicroapp = reactive(loadPluginsMicroapp())
  return pluginsMicroapp
})
