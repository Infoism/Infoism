import { createRouter, createWebHistory } from 'vue-router'
import { loadPlugins, pluginList } from '@/services/microapps'
import { loadMicroApp } from 'qiankun'
import { useAppCaches } from '@/store/useAppCaches'
import Layout from '@/components/Layout/index.vue'
import MicroApp from '@/components/MicroApp/index.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/:appName/:path*',
          name: 'microApp',
          component: MicroApp
        }
      ]
    }
  ]
})

function getAppNameFromPath(path: string) {
  const pathRegExp = /\/?([a-zA-Z0-9]*)\/?.*/
  return pathRegExp.exec(path)?.[1] || ''
}

function isMicro(appName: string) {
  return pluginList.some((value) => {
    return appName === value
  })
}

// 路由守卫
export function initRouter() {
  const { appCachesMap } = useAppCaches()
  router.beforeEach((to, from) => {
    const { path: nextPath } = to
    const { path: lastPath } = from
    const lastAppName = getAppNameFromPath(lastPath)
    const nextAppName = getAppNameFromPath(nextPath)

    // 缓存上级应用
    if (isMicro(lastAppName)) {
      appCachesMap[lastAppName].fullPath = location.pathname
    }

    // 下级应用已经缓存则不再加载
    if (nextAppName in appCachesMap) {
      return true
    }

    // 加载应用
    if (isMicro(nextAppName)) {
      const plugin = loadPlugins().find((item) => nextAppName === item.name)
      if (plugin) {
        const micro = loadMicroApp({
          name: plugin.name,
          entry: plugin.entry,
          container: '#' + plugin.name
        })
        appCachesMap[nextAppName] = {
          ...micro,
          fullPath: location.pathname
        }
      }
    }
    return true
  })
}
