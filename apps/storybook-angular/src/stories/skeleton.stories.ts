import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SkeletonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Feedback/Skeleton',
  component: SkeletonComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SkeletonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-4">
        <paul-skeleton class="h-12 w-12 rounded-full"></paul-skeleton>
        <div class="space-y-2">
          <paul-skeleton class="h-4 w-48"></paul-skeleton>
          <paul-skeleton class="h-4 w-36"></paul-skeleton>
        </div>
      </div>
    `,
  }),
}

export const Card: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-3 w-64">
        <paul-skeleton class="h-40 w-full rounded-xl"></paul-skeleton>
        <paul-skeleton class="h-4 w-full"></paul-skeleton>
        <paul-skeleton class="h-4 w-3/4"></paul-skeleton>
      </div>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
