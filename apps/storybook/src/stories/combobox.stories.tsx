import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { Combobox } from '@meetpaul/ui'

const meta = {
  title: 'Components/Combobox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

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
