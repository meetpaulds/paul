import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SeparatorComponent } from '@meetpaul/ui-angular'

const meta: Meta<SeparatorComponent> = {
  title: 'Layout/Separator',
  component: SeparatorComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SeparatorComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-separator [orientation]="orientation"></paul-separator>`,
  }),
  argTypes: { orientation: { control: 'select', options: ['horizontal', 'vertical'] } },
}
export default meta
type Story = StoryObj<SeparatorComponent>

export const Horizontal: Story = { args: { orientation: 'horizontal' } }
export const Vertical: Story = { args: { orientation: 'vertical' } }
export const Dark: Story = { args: { orientation: 'horizontal' }, globals: { theme: 'dark' } }
