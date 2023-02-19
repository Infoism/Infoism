import { GLOBAL_STYLE } from '@/constant/injectStyle'
import { useTheme } from '@/store/useTheme'
import { effect, reactive } from 'vue'

const pluginInjectStyle = {
  cssBeforeLoaders: [
    {
      content: GLOBAL_STYLE
    }
  ],
  jsBeforeLoaders: [
    {
      callback(appWindow) {
        const themeStore = useTheme()
        effect(() => {
          appWindow.document.body.setAttribute('arco-theme', themeStore.theme)
          appWindow.document.body.setAttribute('skin-name', themeStore.skin)
        })
        return
      }
    }
  ]
}

function injectStyleToMainApp(content: string) {
  const globalStyle = document.createElement('style')
  globalStyle.setAttribute('type', 'text/css')
  globalStyle.textContent = content
  document.head.appendChild(globalStyle)
}

injectStyleToMainApp(GLOBAL_STYLE)

export function useMicroappPlugins() {
  const plugins = reactive([pluginInjectStyle])
  return plugins
}
