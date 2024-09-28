/** @type{import('prettier').Config} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 80,
  semi: false,
  quoteProps: 'consistent',
  singleAttributePerLine: true,
  experimentalTernaries: true,
  bracketSameLine: true,
  trailingComma: 'none',
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss']
}

export default config
