import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Field, Input } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Field, Input },
    template: `<Field label="Email" description="We will never share your email." class="w-72"><Input placeholder="you@example.com" /></Field>`,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { Field, Input },
    template: `<Field label="Email" error="Please enter a valid email address." class="w-72"><Input placeholder="you@example.com" /></Field>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
