import { reactive } from 'vue'

// @unocss-include
export function loadPluginsMicroapp() {
  // load plugins from bridge
  // TODO icon replace by svg or png files
  // TODO load by bridge
  return reactive([
    {
      name: 'vue',
      alias: 'vue',
      icon: 'i-carbon-logo-vue',
      entry: import.meta.env.DEV
        ? '//localhost:3001'
        : 'C:\\Code\\infoism\\templates\\vue3\\dist\\index.html',
      donateSite: 'https://buymeacoffee.com/pidanmeng',
      description: 'A micro app demo powered by vue'
    },
    {
      name: 'demo',
      alias: 'demo',
      icon: 'i-carbon-logo-vue',
      entry: import.meta.env.DEV
        ? '//localhost:3002'
        : 'C:\\Code\\infoism-plugin-demo\\dist\\index.html',
      donateSite: 'https://buymeacoffee.com/pidanmeng',
      description: 'A micro app demo powered by vue'
    }
  ])
}
