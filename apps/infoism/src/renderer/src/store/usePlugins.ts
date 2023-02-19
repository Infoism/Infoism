import { defineStore } from 'pinia'
import { loadPluginsMicroapp } from '@/services/plugins'
import { reactive, ref } from 'vue'
import { getMarketplace } from '@/api'

export const usePluginsMicroapp = defineStore('plugin', () => {
  const pluginsMicroapp = reactive(loadPluginsMicroapp())
  return pluginsMicroapp
})

const packageTypes = ['app', 'theme', 'extension', 'default'] as const
type packageTypesUnion = (typeof packageTypes)[number]
export type packageConfig = {
  // 标题
  title: string
  // 描述
  description: string
  // 仓库
  repo: string
  // 插件作者
  author?: string
  // 捐助地址
  sponsor?: string[]
  // dev插件标识
  dev?: boolean
} & {
  // 插件类型标识
  [key in packageTypesUnion]?: boolean
}
type packageInterface = {
  name: string
  config: packageConfig
  status: string
  message?: string
}
export const usePlugins = defineStore('plugins', () => {
  const plugins = reactive<packageInterface[]>([])
  const loading = ref(true)
  getMarketplace()
    .then((res) => {
      plugins.push(...res.data)
    })
    .finally(() => {
      loading.value = false
    })
  return { plugins, loading }
})
