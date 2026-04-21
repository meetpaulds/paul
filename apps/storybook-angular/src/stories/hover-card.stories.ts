import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { HoverCardComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/HoverCard',
  component: HoverCardComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [HoverCardComponent] })],
  render: () => ({
    template: `
      <paul-hover-card>
        <a slot="trigger" class="font-medium underline underline-offset-4 cursor-pointer">@meetpaul</a>
        <div>
          <h4 class="text-sm font-semibold">@meetpaul</h4>
          <p class="text-sm text-muted-foreground mt-1">The UI component library for modern apps.</p>
        </div>
      </paul-hover-card>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
