import type { Meta, StoryObj } from '@storybook/svelte-vite'
import TabsDemo from './wrappers/TabsDemo.svelte'

const meta: Meta = {
  title: 'Navigation/Tabs',
  component: TabsDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
