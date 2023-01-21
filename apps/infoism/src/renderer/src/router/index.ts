import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { generatePluginRoutes } from '@/services/microapps/routes'
import { loadPlugins, pluginList } from '@/services/microapps'
import { loadMicroApp } from 'qiankun'

export const routes: RouteRecordRaw[] = generatePluginRoutes()

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const microAppMap = {}

// 路由守卫
router.beforeEach((to, _from) => {
  const { path } = to
  const pluginName = path.slice(1)
  if (path in microAppMap) {
    return true
  }
  if (pluginList.includes(pluginName)) {
    const plugin = loadPlugins().find((item) => item.name === pluginName)
    if (plugin) {
      loadMicroApp({
        name: plugin.name,
        entry: plugin.entry,
        container: '#' + plugin.name
      })
    }
  }
  return true
})
