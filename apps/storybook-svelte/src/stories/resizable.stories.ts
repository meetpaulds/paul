import type { Meta, StoryObj } from '@storybook/svelte-vite'
import ResizableDemo from './wrappers/ResizableDemo.svelte'

const meta: Meta = {
  title: 'Layout/Resizable',
  component: ResizableDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
