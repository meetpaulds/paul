import type { Meta, StoryObj } from '@storybook/svelte-vite'
import DropdownMenuDemo from './wrappers/DropdownMenuDemo.svelte'

const meta: Meta = {
  title: 'Overlays/DropdownMenu',
  component: DropdownMenuDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
