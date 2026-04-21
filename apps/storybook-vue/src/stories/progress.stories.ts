import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Progress } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({ components: { Progress }, template: `<Progress :model-value="60" class="w-72" />` }),
}

export const Empty: Story = {
  render: () => ({ components: { Progress }, template: `<Progress :model-value="0" class="w-72" />` }),
}

export const Full: Story = {
  render: () => ({ components: { Progress }, template: `<Progress :model-value="100" class="w-72" />` }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
