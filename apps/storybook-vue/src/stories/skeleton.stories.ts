import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Skeleton } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex items-center gap-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-48" />
          <Skeleton class="h-4 w-36" />
        </div>
      </div>
    `,
  }),
}

export const Card: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex flex-col gap-3 w-64">
        <Skeleton class="h-40 w-full rounded-xl" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-3/4" />
      </div>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
