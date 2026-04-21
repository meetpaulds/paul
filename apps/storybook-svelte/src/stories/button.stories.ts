import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Button from '@meetpaul/ui-svelte/Button.svelte'

const meta: Meta<typeof Button> = {
  title: 'Actions & Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'destructive-outline', 'destructive-ghost'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = { args: { variant: 'default', size: 'default' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Link: Story = { args: { variant: 'link' } }
export const DestructiveOutline: Story = { args: { variant: 'destructive-outline' } }
export const DestructiveGhost: Story = { args: { variant: 'destructive-ghost' } }
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: { variant: 'default' }, globals: { theme: 'dark' } }
