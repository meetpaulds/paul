import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { expect, userEvent, within } from 'storybook/test'
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('combobox'))
    const nextjs = await within(document.body).findByRole('option', { name: 'Next.js' })
    await userEvent.click(nextjs)
    await expect(canvas.getByRole('combobox')).toHaveTextContent('Next.js')
  },
}

export const Dark: Story = {
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
  globals: { theme: 'dark' },
}
