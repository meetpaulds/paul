import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const vueSrc = resolve(__dirname, '../../../packages/ui-vue/src')
const tokensSrc = resolve(__dirname, '../../../packages/tokens/src')

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|ts)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve ??= {}
    const existingAlias = Array.isArray(config.resolve.alias)
      ? config.resolve.alias
      : Object.entries((config.resolve.alias as Record<string, string>) ?? {}).map(([find, replacement]) => ({ find, replacement }))
    config.resolve.alias = [
      ...existingAlias,
      { find: '@meetpaul/ui-vue', replacement: vueSrc },
      { find: '@meetpaul/tokens', replacement: tokensSrc },
      { find: '@', replacement: vueSrc },
    ]
    return config
  },
}

export default config

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(join(value, 'package.json'))))
}
