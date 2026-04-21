import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Alert, AlertTitle, AlertDescription } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription },
    template: `<Alert class="max-w-md"><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the cli.</AlertDescription></Alert>`,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription },
    template: `<Alert variant="destructive" class="max-w-md"><AlertTitle>Error</AlertTitle><AlertDescription>Your session has expired. Please log in again.</AlertDescription></Alert>`,
  }),
}

export const Dark: Story = {
  ...Default,
  globals: { theme: 'dark' },
}
