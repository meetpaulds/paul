import type { Meta, StoryObj } from '@storybook/svelte-vite'
import SidebarDemo from './wrappers/SidebarDemo.svelte'

const meta: Meta = {
  title: 'Layout/Sidebar',
  component: SidebarDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
