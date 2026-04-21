import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@meetpaul/ui-vue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['vue', /^radix-vue/, /^@tanstack\//, 'lucide-vue-next', 'class-variance-authority', 'clsx', 'tailwind-merge'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
})
