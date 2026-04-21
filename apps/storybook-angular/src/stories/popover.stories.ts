import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { PopoverComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/Popover',
  component: PopoverComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [PopoverComponent, ButtonComponent] })],
  render: () => ({
    template: `
      <paul-popover>
        <button slot="trigger" paul-button variant="outline">Open Popover</button>
        <div>
          <h4 class="font-medium leading-none mb-2">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
      </paul-popover>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
