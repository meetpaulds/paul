import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    svelte(),
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
      name: '@meetpaul/ui-svelte',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['svelte', /^svelte\//, /^@melt-ui\//, 'class-variance-authority', 'clsx', 'tailwind-merge'],
      output: {
        globals: { svelte: 'Svelte' },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
})
