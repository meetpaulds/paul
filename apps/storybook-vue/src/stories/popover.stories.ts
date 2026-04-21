import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Popover, PopoverTrigger, PopoverContent, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent, Button },
    template: `
      <Popover>
        <PopoverTrigger as-child><Button variant="outline">Open Popover</Button></PopoverTrigger>
        <PopoverContent class="w-64">
          <p class="text-sm">Popover content goes here.</p>
        </PopoverContent>
      </Popover>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
