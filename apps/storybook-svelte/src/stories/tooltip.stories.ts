import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Tooltip from '@meetpaul/ui-svelte/Tooltip.svelte'

const meta: Meta<typeof Tooltip> = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = { args: { content: 'Add to library' } }
export const Dark: Story = { args: { content: 'Add to library' }, globals: { theme: 'dark' } }
