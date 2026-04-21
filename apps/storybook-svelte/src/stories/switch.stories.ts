import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Switch from '@meetpaul/ui-svelte/Switch.svelte'

const meta: Meta<typeof Switch> = {
  title: 'Data Entry & Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { disabled: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = { args: {} }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: {}, globals: { theme: 'dark' } }
