import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AspectRatioComponent } from '@meetpaul/ui-angular'

const meta: Meta<AspectRatioComponent> = {
  title: 'Layout/Aspect Ratio',
  component: AspectRatioComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [AspectRatioComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-aspect-ratio [ratio]="ratio" class="w-72 rounded-md overflow-hidden bg-muted"></paul-aspect-ratio>`,
  }),
  argTypes: { ratio: { control: 'number' } },
}
export default meta
type Story = StoryObj<AspectRatioComponent>

export const SixteenByNine: Story = { args: { ratio: 16 / 9 } }
export const Square: Story = { args: { ratio: 1 } }
export const Dark: Story = { args: { ratio: 16 / 9 }, globals: { theme: 'dark' } }
