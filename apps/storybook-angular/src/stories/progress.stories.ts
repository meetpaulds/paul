import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ProgressComponent } from '@meetpaul/ui-angular'

const meta: Meta<ProgressComponent> = {
  title: 'Feedback/Progress',
  component: ProgressComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ProgressComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-progress [value]="value" class="w-72"></paul-progress>`,
  }),
  argTypes: { value: { control: { type: 'range', min: 0, max: 100 } } },
}
export default meta
type Story = StoryObj<ProgressComponent>

export const Default: Story = { args: { value: 60 } }
export const Empty: Story = { args: { value: 0 } }
export const Full: Story = { args: { value: 100 } }
export const Dark: Story = { args: { value: 60 }, globals: { theme: 'dark' } }
