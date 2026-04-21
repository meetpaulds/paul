import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ResizablePanelGroupComponent, ResizablePanelComponent, ResizableHandleComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Layout/Resizable',
  component: ResizablePanelGroupComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ResizablePanelGroupComponent, ResizablePanelComponent, ResizableHandleComponent] })],
  render: () => ({
    template: `
      <div class="h-40 w-80 rounded-md border">
        <paul-resizable-panel-group direction="horizontal" class="h-full">
          <paul-resizable-panel>
            <div class="flex h-full items-center justify-center p-4 text-sm">One</div>
          </paul-resizable-panel>
          <paul-resizable-handle />
          <paul-resizable-panel>
            <div class="flex h-full items-center justify-center p-4 text-sm">Two</div>
          </paul-resizable-panel>
        </paul-resizable-panel-group>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
