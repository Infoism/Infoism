import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { generateRoute } from '@/services/microapps/routes'
import { loadPlugins, pluginList } from '@/services/microapps'
import { loadMicroApp } from '@infoism/main'

export const routes: RouteRecordRaw[] = generateRoute()

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const microAppMap = {}

// 路由守卫
router.beforeEach((to, from) => {
  const { path } = to
  const pluginName = path.slice(1)
  if (path in microAppMap) {
    return true
  }
  console.log(to, from, pluginList, pluginName)
  if (pluginList.includes(pluginName)) {
    const plugin = loadPlugins().find((item) => item.name === pluginName)
    console.log(plugin)
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
