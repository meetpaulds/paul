import type { Preview } from '@storybook/svelte-vite'
import Wrapper from './Wrapper.svelte'
import '../src/styles/globals.css'

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
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#09090b' },
      ],
    },
    layout: 'centered',
  },
  decorators: [
    (storyFn: any, context: any) => {
      const dir = context.globals?.dir ?? 'ltr'
      return {
        Component: Wrapper,
        props: { dir },
        slots: { default: storyFn() },
      }
    },
  ],
}

export default preview
