import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

const config = defineConfig({
  output: 'static',
  image: {
    domains: ['github.com']
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '#': path.join(import.meta.dirname, 'src')
      }
    }
  }
})

export default config
