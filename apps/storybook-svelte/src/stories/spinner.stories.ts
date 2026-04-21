import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Spinner from '@meetpaul/ui-svelte/Spinner.svelte'

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = { args: {} }
export const Dark: Story = { args: {}, globals: { theme: 'dark' } }
