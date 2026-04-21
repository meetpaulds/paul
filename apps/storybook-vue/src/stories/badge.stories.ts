import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Badge } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline'] } },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Badge },
    template: `<div class="flex gap-2 flex-wrap"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="destructive">Destructive</Badge><Badge variant="outline">Outline</Badge></div>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
