import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Slider } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Slider },
    template: `<Slider :model-value="[50]" :min="0" :max="100" :step="1" class="w-64" />`,
  }),
}

export const Range: Story = {
  render: () => ({
    components: { Slider },
    template: `<Slider :model-value="[25, 75]" :min="0" :max="100" :step="1" class="w-64" />`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Slider },
    template: `<Slider :model-value="[40]" disabled class="w-64" />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
