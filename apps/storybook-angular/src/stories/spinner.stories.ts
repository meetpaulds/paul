import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SpinnerComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Feedback/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SpinnerComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({ template: `<paul-spinner></paul-spinner>` }),
}

export const WithLabel: Story = {
  render: () => ({ template: `<div class="flex items-center gap-2"><paul-spinner></paul-spinner><span class="text-sm">Loading...</span></div>` }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
