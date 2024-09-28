import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

const config = defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '#': path.join(import.meta.dirname, 'src')
      }
    }
  },
  server: {
    port: 3000
  }
})

export default config
