import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { copyFileSync, mkdirSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src'],
    }),
    libInjectCss(),
    {
      name: 'copy-css',
      closeBundle() {
        mkdirSync(resolve(__dirname, 'dist/styles'), { recursive: true })
        copyFileSync(
          resolve(__dirname, 'src/styles/globals.css'),
          resolve(__dirname, 'dist/styles/globals.css')
        )
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@meetpaul/ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
