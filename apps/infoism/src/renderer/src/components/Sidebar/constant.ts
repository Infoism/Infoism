export type buttonOption = {
  icon: string
  path?: string
  activeRule?: string | RegExp
  callback?: () => void
}

export type buttonGroupOptions = buttonOption[]

// @unocss-include
export const buttonGroupOptions: buttonGroupOptions = [
  {
    icon: 'i-carbon-logo-vue',
    path: '/vue'
  },
  {
    icon: 'i-clarity-search-line',
    path: '/search'
  },
  {
    icon: 'i-clarity-favorite-line',
    path: '/favorite'
  },
  {
    icon: 'i-carbon-recently-viewed',
    path: '/recent'
  }
]
