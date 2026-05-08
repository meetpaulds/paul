import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const root = path.resolve(__dirname, '../..')
const uiSrc = path.resolve(root, 'packages/ui-react/src')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': uiSrc,
      '@meetpaul/ui-react': uiSrc,
      '@meetpaul/ui-react/styles': path.resolve(uiSrc, 'styles/globals.css'),
    },
  },
  server: {
    fs: {
      allow: [root],
    },
  },
})
