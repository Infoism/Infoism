import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  rules: [
    [
      'drag',
      {
        '-webkit-app-region': 'drag'
      }
    ],
    [
      'no-drag',
      {
        '-webkit-app-region': 'no-drag'
      }
    ]
  ],
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-primary-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 no-drag'
    ],
    [
      'icon-btn',
      'p-0 text-[0.9em] inline-block cursor-pointer select-none transition duration-200 ease-in-out hover:opacity-100 hover:color-primary no-drag'
    ]
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      info: 'var(--color-info)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      text: 'var(--color-text-default)'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
