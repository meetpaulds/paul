import type { Meta, StoryObj } from '@storybook/svelte-vite'
import PopoverDemo from './wrappers/PopoverDemo.svelte'

const meta: Meta = {
  title: 'Overlays/Popover',
  component: PopoverDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
