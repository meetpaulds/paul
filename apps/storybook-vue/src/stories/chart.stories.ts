import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ChartContainer } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Display/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  render: () => ({
    components: { ChartContainer },
    template: `
      <ChartContainer class="h-48 w-80">
        <div class="flex h-full items-end gap-2 px-4 pb-4">
          <div class="flex-1 bg-primary rounded-t" style="height:60%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:80%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:40%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:90%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:70%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:50%"></div>
        </div>
      </ChartContainer>
    `,
  }),
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
