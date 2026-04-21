import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Textarea } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({ components: { Textarea }, template: `<Textarea placeholder="Type your message here." class="w-72" />` }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Textarea },
    template: `<div class="grid w-72 gap-1.5"><label class="text-sm font-medium" for="msg">Your message</label><Textarea id="msg" placeholder="Type your message here." /></div>`,
  }),
}

export const Disabled: Story = {
  render: () => ({ components: { Textarea }, template: `<Textarea disabled placeholder="Disabled" class="w-72" />` }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
