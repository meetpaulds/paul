import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Empty } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Empty },
    template: `<Empty title="No results found" description="Try adjusting your search or filters." />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
