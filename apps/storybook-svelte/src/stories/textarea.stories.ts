import type { Meta, StoryObj } from '@storybook/svelte-vite'
import Textarea from '@meetpaul/ui-svelte/Textarea.svelte'

const meta: Meta<typeof Textarea> = {
  title: 'Data Entry & Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { disabled: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = { args: { placeholder: 'Type your message here.', class: 'w-72' } }
export const Disabled: Story = { args: { placeholder: 'Disabled', disabled: true, class: 'w-72' } }
export const Dark: Story = { args: { placeholder: 'Type your message here.', class: 'w-72' }, globals: { theme: 'dark' } }
