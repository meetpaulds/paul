import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AlertComponent, AlertTitleComponent, AlertDescriptionComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Feedback/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [AlertComponent, AlertTitleComponent, AlertDescriptionComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `<paul-alert class="max-w-md"><paul-alert-title>Heads up!</paul-alert-title><paul-alert-description>You can add components using the cli.</paul-alert-description></paul-alert>`,
  }),
}

export const Destructive: Story = {
  render: () => ({
    template: `<paul-alert variant="destructive" class="max-w-md"><paul-alert-title>Error</paul-alert-title><paul-alert-description>Your session has expired. Please log in again.</paul-alert-description></paul-alert>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
