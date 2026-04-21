import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Label, Input } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Label, Input },
    template: `<div class="grid gap-2 w-72"><Label for="email">Email</Label><Input id="email" placeholder="you@example.com" /></div>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
