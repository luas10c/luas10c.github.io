const config = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: ['prettier'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 22
  },
  rules: {
    'prettier/prettier': 'error'
  }
}

module.exports = config
