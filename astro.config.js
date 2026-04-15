import { defineConfig } from 'astro/config'
import { join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  image: {
    domains: ['github.com']
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '#': join(import.meta.dirname, 'src')
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
