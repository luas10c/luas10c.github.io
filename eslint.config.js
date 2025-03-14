import globals from 'globals'

import js from '@eslint/js'

import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import prettier from 'eslint-plugin-prettier'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  {
    files: ['**/*.{js,ts,tsx}'],
    ignores: ['node_modules', 'dist', '.astro'],
    plugins: {
      '@typescript-eslint': ts,
      prettier
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: false
        }
      },
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...prettier.configs.recommended.rules
    }
  }
]

export default config
