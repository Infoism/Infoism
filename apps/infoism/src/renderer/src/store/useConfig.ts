import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfig = defineStore('config', () => {
  // 语言
  const lang = ref('en')
  return {
    general: {
      lang
    }
  }
})
