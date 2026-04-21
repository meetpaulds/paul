import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Empty from '@meetpaul/ui-svelte/Empty.svelte'

const meta: Meta<typeof Empty> = {
  title: 'Feedback/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = { args: { title: 'No results found', description: 'Try adjusting your search or filters.' } }
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
