import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import env from './env.js'
import unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const { port, name } = env

export default defineConfig({
  base: `//localhost:${port}`,
  server: {
    port,
    cors: true,
    origin: `//localhost:${port}`
  },
  preview: {
    port
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  plugins: [
    vue(),
    qiankun(name, {
      useDevMode: true
    }),
    unocss(),
    AutoImport({
      imports: ['vue'],
      dts: true
    }),
    Components({
      dts: true
    })
  ]
})
