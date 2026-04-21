import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Input } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({ components: { Input }, template: `<Input placeholder="Email" class="w-72" />` }),
}

export const File: Story = {
  render: () => ({ components: { Input }, template: `<Input type="file" class="w-72" />` }),
}

export const Disabled: Story = {
  render: () => ({ components: { Input }, template: `<Input placeholder="Disabled" disabled class="w-72" />` }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Input },
    template: `<div class="grid w-72 gap-1.5"><label class="text-sm font-medium" for="email">Email</label><Input type="email" id="email" placeholder="m@example.com" /></div>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
