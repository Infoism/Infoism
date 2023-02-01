import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { effect } from 'vue'

export const useTheme = defineStore('theme', () => {
  // 亮色主题 | 暗色主题
  const theme = ref(useStorage('theme', 'dark'))
  effect(() => {
    document.body.setAttribute('arco-theme', theme.value)
  })
  const changeTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  // 换肤
  const skin = ref(useStorage('skin', 'default'))
  effect(() => {
    document.body.setAttribute('skin-name', skin.value)
  })
  const changeSkin = (skinName: string) => {
    skin.value = skinName
  }
  return { theme, skin, changeTheme, changeSkin }
})
