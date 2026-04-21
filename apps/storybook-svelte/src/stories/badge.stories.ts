import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Badge from '@meetpaul/ui-svelte/Badge.svelte'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline'] },
  },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { variant: 'default' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Dark: Story = { args: { variant: 'default' }, globals: { theme: 'dark' } }
