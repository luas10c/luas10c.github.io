import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const config = defineConfig({
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '#': path.join(fileURLToPath(import.meta.url), '..', 'src')
      }
    }
  }
})

export default config
