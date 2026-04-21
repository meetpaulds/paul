import type { Meta, StoryObj } from '@storybook/svelte-vite'
import CollapsibleDemo from './wrappers/CollapsibleDemo.svelte'

const meta: Meta = {
  title: 'Disclosure/Collapsible',
  component: CollapsibleDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
