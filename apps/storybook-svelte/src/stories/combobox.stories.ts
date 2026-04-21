import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ComboboxDemo from './wrappers/ComboboxDemo.svelte'

const meta: Meta = {
  title: 'Inputs/Combobox',
  component: ComboboxDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
