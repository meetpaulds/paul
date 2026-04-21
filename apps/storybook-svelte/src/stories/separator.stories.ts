import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Separator from '@meetpaul/ui-svelte/Separator.svelte'

const meta: Meta<typeof Separator> = {
  title: 'Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { orientation: { control: 'select', options: ['horizontal', 'vertical'] } },
}
export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = { args: { orientation: 'horizontal', class: 'w-64' } }
export const Vertical: Story = { args: { orientation: 'vertical', class: 'h-12' } }
export const Dark: Story = { ...Horizontal, globals: { theme: 'dark' } }
