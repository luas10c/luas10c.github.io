import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'
import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

import astro from 'eslint-plugin-astro'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'coverage', '.astro']),
  js.configs.recommended,
  ts.configs.recommended,
  astro.configs.recommended,
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
  },
  {
    rules: {
      'astro/missing-client-only-directive-value': 'error'
    }
  }
])
