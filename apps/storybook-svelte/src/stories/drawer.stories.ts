import type { Meta, StoryObj } from '@storybook/svelte-vite'
import DrawerDemo from './wrappers/DrawerDemo.svelte'

const meta: Meta = {
  title: 'Overlays/Drawer',
  component: DrawerDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
