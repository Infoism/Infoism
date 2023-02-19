import { createRouter, createWebHistory } from 'vue-router'
import Bridges from '../components/Bridges.vue'
import Events from '../components/Events.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Bridges
  },
  {
    name: 'Bridge',
    path: '/bridge',
    component: Bridges
  },
  {
    name: 'Event',
    path: '/event',
    component: Events
  }
]

export const router = createRouter({
  history: createWebHistory('/vue'),
  routes
})
