import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Skeleton from '@meetpaul/ui-svelte/Skeleton.svelte'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = { args: { class: 'h-12 w-48 rounded-md' } }
export const Circle: Story = { args: { class: 'h-12 w-12 rounded-full' } }
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
