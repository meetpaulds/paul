import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { TooltipDirective, ButtonComponent } from '@meetpaul/ui-angular'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: 'Overlays/Tooltip',
  component: TooltipDirective,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [TooltipDirective, ButtonComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-tooltip [content]="content"><button paul-button variant="outline">Hover me</button></paul-tooltip>`,
  }),
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { content: 'Add to library' } as any }
export const Dark: Story = { args: { content: 'Add to library' } as any, globals: { theme: 'dark' } }
