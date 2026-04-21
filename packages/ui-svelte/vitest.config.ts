import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    {
      name: 'svelte-vitest-workaround',
      configureServer(server: any) {
        if (!server.environments) {
          server.environments = { ssr: { config: server.config } }
        }
      },
    },
    svelte({ compilerOptions: { hmr: false } }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      $lib: resolve(__dirname, './src/lib'),
    },
  },
})
