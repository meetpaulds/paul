import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const root = path.resolve(__dirname, '../..')
const svelteSrc = path.resolve(root, 'packages/ui-svelte/src/lib/components')
const tokensSrc = path.resolve(root, 'packages/tokens/src')

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  resolve: {
    alias: {
      '@meetpaul/ui-svelte': svelteSrc,
      '@meetpaul/tokens': tokensSrc,
    },
  },
  server: {
    fs: {
      allow: [root],
    },
  },
})
