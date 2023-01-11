import typescript from '@rollup/plugin-typescript'
export default {
  input: 'index.ts',
  output: [
    {
      format: 'cjs',
      file: `dist/index.cjs.js`
    },
    {
      format: 'es',
      file: `dist/index.esm.js`
    }
  ],
  plugins: [
    typescript({
      module: 'ESNext'
    })
  ]
}
