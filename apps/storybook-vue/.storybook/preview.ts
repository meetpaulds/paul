import type { Preview } from '@storybook/vue3-vite'
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
}

const withDir = (storyFn: any, context: any) => {
  const dir = context.globals?.dir ?? 'ltr'
  return {
    components: { story: storyFn() },
    setup() {
      return { dir }
    },
    template: `<div :dir="dir" style="width:100%;min-height:100%"><story /></div>`,
  }
}

preview.decorators = [withDir]

export default preview
