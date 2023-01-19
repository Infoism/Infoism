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
