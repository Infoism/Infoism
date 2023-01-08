import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Versions from '../components/Versions.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/vue' },
  { path: '/vue', component: Versions, name: 'Vue' }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
