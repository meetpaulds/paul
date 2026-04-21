import type { Meta, StoryObj } from '@storybook/svelte-vite'
import CardDemo from './wrappers/CardDemo.svelte'

const meta: Meta = {
  title: 'Layout/Card',
  component: CardDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
