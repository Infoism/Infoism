import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import MicroApp from '@/components/MicroApp/MicroApp.vue'
import { loadPluginsMicroapp } from '@/services/plugins'

function generateMicroApp(app) {
  const { entry, name } = app
  return h(MicroApp, {
    entry,
    name
  })
}

function generateRouterFromPlugins() {
  const microapps = loadPluginsMicroapp()
  return microapps.map((app) => ({
    path: `/${app.name}`,
    name: app.name,
    component: generateMicroApp(app)
  }))
}

const base = import.meta.env.DEV ? undefined : window.env?.base
export const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [...generateRouterFromPlugins()]
    }
  ]
})
