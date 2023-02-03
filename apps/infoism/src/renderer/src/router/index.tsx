import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import MicroApp from '@/components/MicroApp/MicroApp.vue'
import { loadPlugins } from '@/services/microapps/plugins'

function generateMicroApp(app) {
  const { entry, name } = app
  return h(MicroApp, {
    entry,
    name
  })
}

function generateRouterFromPlugins() {
  return loadPlugins().map((app) => ({
    path: `/${app.name}/:path*`,
    name: app.name,
    component: generateMicroApp(app)
  }))
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [...generateRouterFromPlugins()]
    }
  ]
})
