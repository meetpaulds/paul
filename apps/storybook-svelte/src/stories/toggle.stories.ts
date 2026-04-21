import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Toggle from '@meetpaul/ui-svelte/Toggle.svelte'

const meta: Meta<typeof Toggle> = {
  title: 'Actions & Buttons/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    pressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = { args: { variant: 'default' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Pressed: Story = { args: { pressed: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: { variant: 'default' }, globals: { theme: 'dark' } }
