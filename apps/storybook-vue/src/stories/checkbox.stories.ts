import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Checkbox } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Checkbox },
    template: `<div class="flex items-center gap-2"><Checkbox id="terms" /><label for="terms" class="text-sm font-medium leading-none">Accept terms and conditions</label></div>`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Checkbox },
    template: `<div class="flex items-center gap-2"><Checkbox id="disabled" disabled /><label for="disabled" class="text-sm font-medium leading-none opacity-70">Disabled</label></div>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
