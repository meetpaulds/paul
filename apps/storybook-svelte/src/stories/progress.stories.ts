import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Progress from '@meetpaul/ui-svelte/Progress.svelte'

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100 } } },
}
export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = { args: { value: 60, class: 'w-72' } }
export const Empty: Story = { args: { value: 0, class: 'w-72' } }
export const Full: Story = { args: { value: 100, class: 'w-72' } }
export const Dark: Story = { args: { value: 60, class: 'w-72' }, globals: { theme: 'dark' } }
