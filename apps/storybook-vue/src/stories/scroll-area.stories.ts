import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ScrollArea } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Layout/Scroll Area',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-48 w-64 rounded-md border p-4">
        <div v-for="i in 20" :key="i" class="py-1 text-sm border-b last:border-0">
          Item {{ i }}
        </div>
      </ScrollArea>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
