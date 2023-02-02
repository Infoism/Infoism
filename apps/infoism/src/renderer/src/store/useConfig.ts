import { defineStore } from 'pinia'

export const useConfig = defineStore('config', () => {
  // 语言
  const lang = ref('en')
  return {
    general: {
      lang
    }
  }
})
