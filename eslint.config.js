import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'
import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'coverage', '.astro', '**/*.astro']),
  js.configs.recommended,
  ts.configs.recommended,
  {
    name: 'prettier/recommended',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      sourceType: 'module'
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  }
])
