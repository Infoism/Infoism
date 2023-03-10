module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'], // 覆盖eslint格式配置,写在最后
  parserOptions: {
    ecmaVersion: 13
  }
}
