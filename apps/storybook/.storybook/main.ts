// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const uiSrc = resolve(__dirname, '../../../packages/ui/src')

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-docs")
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config: import('vite').InlineConfig) => {
    config.resolve ??= {}
    const existingAlias = Array.isArray(config.resolve.alias)
      ? config.resolve.alias
      : Object.entries((config.resolve.alias as Record<string, string>) ?? {}).map(([find, replacement]) => ({ find, replacement }))
    config.resolve.alias = [
      ...existingAlias,
      { find: '@meetpaul/ui/styles', replacement: resolve(uiSrc, 'styles/globals.css') },
      { find: '@meetpaul/ui', replacement: uiSrc },
      { find: '@', replacement: uiSrc },
    ]
    return config
  },
}

export default config

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(join(value, "package.json"))))
}
