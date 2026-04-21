import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ChartContainerComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Display/Chart',
  component: ChartContainerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ChartContainerComponent] })],
  render: () => ({
    template: `
      <paul-chart-container class="h-48 w-80">
        <div class="flex h-full items-end gap-2 px-4 pb-4">
          <div class="flex-1 bg-primary rounded-t" style="height:60%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:80%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:40%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:90%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:70%"></div>
          <div class="flex-1 bg-primary rounded-t" style="height:50%"></div>
        </div>
      </paul-chart-container>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
