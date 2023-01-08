import i18next from 'i18next'

import en_infoism from './en/infoism.json'
import zh_infoism from './zh-cn/infoism.json'
import en_vue3 from './en/vue3.json'
import zh_vue3 from './zh-cn/vue3.json'

// init i18n
const resources = {
  zh: {
    infoism: zh_infoism,
    vue3: zh_vue3
  },
  en: {
    infoism: en_infoism,
    vue3: en_vue3
  }
}

i18next.init({
  lng: 'zh',
  debug: true,
  resources,
  defaultNS: 'vue3'
})

export default i18next
