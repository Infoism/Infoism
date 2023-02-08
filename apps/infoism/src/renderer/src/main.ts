import 'uno.css'
import { createApp, Component, App } from 'vue'
import MainApp from './App.vue'
import { initRouter, router } from './router'
import { createPinia } from 'pinia'
import { injectBridges } from './services/bridge'
import { injectEventListeners } from './services/event'
import '@arco-design/web-vue/dist/arco.css'
import '@vueuse/shared'

const pinia = createPinia()

injectEventListeners()
injectBridges()

function initVueApp(App: Component): App {
  return createApp(App).use(pinia).use(router)
}

initVueApp(MainApp).mount('#app')

initRouter()
