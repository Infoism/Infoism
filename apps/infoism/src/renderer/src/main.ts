import { createApp, Component, App } from 'vue'
import MainApp from './App.vue'
import i18next from '@infoism/locales'
import i18NextVue from 'i18next-vue'
import { router } from './router'
import { createPinia } from 'pinia'
import 'uno.css'
import { injectBridges } from './services/bridge'
import { Event } from '@infoism/lib'

const pinia = createPinia()
setTimeout(() => {
  console.log('object', Object.keys(Event), Event)
  for (const key in Event) {
    console.log(key, Event)
  }
}, 1000)

injectBridges()

function initVueApp(App: Component): App {
  return createApp(App).use(i18NextVue, { i18next }).use(router).use(pinia)
}

initVueApp(MainApp).mount('#app')
