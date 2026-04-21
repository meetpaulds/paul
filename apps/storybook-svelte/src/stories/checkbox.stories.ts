import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Checkbox from '@meetpaul/ui-svelte/Checkbox.svelte'

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry & Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { disabled: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = { args: {} }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: {}, globals: { theme: 'dark' } }
