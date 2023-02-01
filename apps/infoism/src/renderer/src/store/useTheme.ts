import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { effect } from 'vue'

export const useTheme = defineStore('theme', () => {
  // 亮色主题 | 暗色主题
  const theme = ref(useStorage('theme', 'dark'))
  effect(() => {
    document.body.setAttribute('arco-theme', unref(theme))
  })
  const changeTheme = () => {
    theme.value = unref(theme) === 'dark' ? 'light' : 'dark'
  }

  // 换肤
  const skin = ref(useStorage('skin', 'default'))
  effect(() => {
    document.body.setAttribute('skin-name', unref(skin))
  })
  const changeSkin = (skinName: string) => {
    skin.value = skinName
  }
  return { theme, skin, changeTheme, changeSkin }
})
