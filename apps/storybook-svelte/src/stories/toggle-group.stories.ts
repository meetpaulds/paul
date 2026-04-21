import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ToggleGroupDemo from './wrappers/ToggleGroupDemo.svelte'

const meta: Meta = {
  title: 'Inputs/ToggleGroup',
  component: ToggleGroupDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
