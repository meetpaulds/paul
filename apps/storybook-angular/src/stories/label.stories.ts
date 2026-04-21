import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { LabelComponent, InputComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Data Entry & Forms/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [LabelComponent, InputComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `<div class="grid gap-2 w-72"><paul-label for="email">Email</paul-label><paul-input id="email" placeholder="you@example.com"></paul-input></div>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
