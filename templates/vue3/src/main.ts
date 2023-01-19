import { App, Component, createApp } from 'vue'
import './style.scss'
import MainApp from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { registerMicroApp } from '@infoism/core'
import i18next from '@infoism/locales'
import i18NextVue from 'i18next-vue'
import 'uno.css'

let app: App | null = null

function initVueApp(App: Component) {
  return createApp(App).use(i18NextVue, { i18next })
}

const { event } = registerMicroApp('vue', {})
event.listen()

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  initVueApp(MainApp).mount('#app')
} else {
  renderWithQiankun({
    mount(props) {
      app = initVueApp(MainApp)
      app.mount(
        (props.container
          ? props.container.querySelector('#app')
          : document.getElementById('app')) as Element
      )
    },
    bootstrap() {
      // bootstrap
    },
    update() {
      // update
    },
    unmount() {
      // unmount
      app?.unmount()
    }
  })
}
