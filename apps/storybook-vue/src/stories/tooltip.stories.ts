import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Tooltip, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `<Tooltip content="Add to library"><Button variant="outline">Hover me</Button></Tooltip>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
