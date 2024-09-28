import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', '.astro', 'coverage']),
  js.configs.recommended,
  ts.configs.recommended,
  {
    name: 'prettier/recommended',
    plugins: {
      prettier
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  }
])
