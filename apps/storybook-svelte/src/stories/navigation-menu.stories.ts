import type { Meta, StoryObj } from '@storybook/svelte-vite'
import NavigationMenuDemo from './wrappers/NavigationMenuDemo.svelte'

const meta: Meta = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenuDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
