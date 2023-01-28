import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: import('../components/Bridges.vue')
  },
  {
    name: 'Bridge',
    path: '/bridge',
    component: import('../components/Bridges.vue')
  },
  {
    name: 'Event',
    path: '/event',
    component: import('../components/Events.vue')
  }
]

export const router = createRouter({
  history: createWebHistory('/vue'),
  routes
})
