import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const root = path.resolve(__dirname, '../..')
const vueSrc = path.resolve(root, 'packages/ui-vue/src')
const tokensSrc = path.resolve(root, 'packages/tokens/src')
const uiVueDeps = path.resolve(root, 'packages/ui-vue/node_modules')

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    dedupe: ['vue', 'radix-vue', 'lucide-vue-next', '@vueuse/core'],
    alias: [
      { find: '@meetpaul/ui-vue', replacement: vueSrc },
      { find: '@meetpaul/tokens', replacement: tokensSrc },
      { find: '@', replacement: vueSrc },
      { find: 'radix-vue', replacement: path.resolve(uiVueDeps, 'radix-vue') },
      { find: 'lucide-vue-next', replacement: path.resolve(uiVueDeps, 'lucide-vue-next') },
      { find: 'class-variance-authority', replacement: path.resolve(uiVueDeps, 'class-variance-authority') },
      { find: '@vueuse/core', replacement: path.resolve(uiVueDeps, '@vueuse/core') },
    ],
  },
  optimizeDeps: {
    include: ['radix-vue', 'lucide-vue-next', '@vueuse/core'],
  },
  server: {
    fs: {
      allow: [root],
    },
  },
})
