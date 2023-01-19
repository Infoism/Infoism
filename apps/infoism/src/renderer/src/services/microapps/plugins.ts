// @unocss-include
export function loadPlugins() {
  // load plugins from bridge
  // TODO icon replace by svg or png files
  // TODO load by bridge
  return [
    {
      name: 'vue',
      alias: 'vue',
      icon: 'i-carbon-logo-vue',
      entry: '//localhost:3001',
      donateSite: 'https://buymeacoffee.com/pidanmeng',
      description: 'A micro app demo powered by vue'
    }
  ]
}

export const pluginList = loadPlugins().map((plugin) => plugin.name)
