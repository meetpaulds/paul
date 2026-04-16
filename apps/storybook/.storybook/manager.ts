import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle: 'paul',
  brandUrl: 'https://paul.sirpauls.com',
  brandImage: '/logo.png',
  brandTarget: '_self',
  
  // Colors matching your logo (yellow and blue)
  colorPrimary: '#3366FF', // Blue from your logo
  colorSecondary: '#FFFF00', // Yellow from your logo
})

addons.setConfig({
  theme,
})
