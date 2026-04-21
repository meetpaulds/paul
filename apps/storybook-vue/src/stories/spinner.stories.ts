import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Spinner } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({ components: { Spinner }, template: `<Spinner />` }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Spinner },
    template: `<div class="flex items-center gap-2"><Spinner /><span class="text-sm">Loading...</span></div>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
