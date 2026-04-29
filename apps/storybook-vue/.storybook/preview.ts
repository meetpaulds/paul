import type { Preview } from '@storybook/vue3-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#09090b' },
      ],
    },
    layout: 'centered',
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }) as any,
  ],
}

export default preview
