import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Input from '@meetpaul/ui-svelte/Input.svelte'

const meta: Meta<typeof Input> = {
  title: 'Data Entry & Forms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { disabled: { control: 'boolean' }, type: { control: 'select', options: ['text', 'email', 'password', 'file', 'number'] } },
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = { args: { placeholder: 'Email', class: 'w-72' } }
export const File: Story = { args: { type: 'file', class: 'w-72' } }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true, class: 'w-72' } }
export const Dark: Story = { args: { placeholder: 'Email', class: 'w-72' }, globals: { theme: 'dark' } }
