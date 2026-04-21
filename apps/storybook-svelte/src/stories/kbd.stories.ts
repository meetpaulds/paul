import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Kbd from '@meetpaul/ui-svelte/Kbd.svelte'

const meta: Meta<typeof Kbd> = {
  title: 'Data Display/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = { args: {} }
export const Dark: Story = { args: {}, globals: { theme: 'dark' } }
