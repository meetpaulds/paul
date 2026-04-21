import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ContextMenuDemo from './wrappers/ContextMenuDemo.svelte'

const meta: Meta = {
  title: 'Overlays/ContextMenu',
  component: ContextMenuDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
