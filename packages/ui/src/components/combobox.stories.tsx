import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Combobox } from './combobox'

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    return (
      <Combobox
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select framework..."
      />
    )
  },
}
