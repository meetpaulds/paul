import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TooltipComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta<TooltipComponent> = {
  title: 'Overlays/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TooltipComponent, ButtonComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-tooltip [content]="content"><button paul-button variant="outline">Hover me</button></paul-tooltip>`,
  }),
}
export default meta
type Story = StoryObj<TooltipComponent>

export const Default: Story = { args: { content: 'Add to library' } }
export const Dark: Story = { args: { content: 'Add to library' }, globals: { theme: 'dark' } }
