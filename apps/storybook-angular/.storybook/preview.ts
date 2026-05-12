import type { Preview } from '@storybook/angular'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  globalTypes: {
    dir: {
      name: 'Text Direction',
      description: 'Writing direction for RTL language testing',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ltr', right: 'LTR', title: 'Left-to-Right' },
          { value: 'rtl', right: 'RTL', title: 'Right-to-Left (Arabic/Hebrew)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#09090b' },
      ],
    },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'aria-hidden-focus', enabled: false },
        ],
      },
    },
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
