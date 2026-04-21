import type { StorybookConfig } from '@storybook/svelte-vite'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|ts|svelte)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/svelte-vite'),
    options: {},
  },
}

export default config

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(join(value, 'package.json'))))
}
