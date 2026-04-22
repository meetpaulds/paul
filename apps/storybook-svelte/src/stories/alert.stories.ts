import type { Meta, StoryObj } from '@storybook/svelte-vite'
import AlertDemo from './wrappers/AlertDemo.svelte'
import AlertDestructiveDemo from './wrappers/AlertDestructiveDemo.svelte'

const meta: Meta = {
  title: 'Feedback/Alert',
  component: AlertDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Destructive: Story = { render: () => ({ Component: AlertDestructiveDemo, props: {} }) }
export const Dark: Story = { globals: { theme: 'dark' } }
