import { addons } from 'storybook/manager-api'

addons.setConfig({
  theme: {
    base: 'light',
    brandTitle: 'paul',
    brandUrl: 'https://paul.sirpauls.com',
    brandImage: '/logo.png',
    brandTarget: '_self',
  } as any,
})
