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

export const WithProps: Story = {
  render: () => ({
    components: { Alert },
    template: `<Alert class="max-w-md" title="Heads up!" description="You can add components to your app using the cli." />`,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription },
    template: `<Alert variant="destructive" class="max-w-md"><AlertTitle>Error</AlertTitle><AlertDescription>Your session has expired. Please log in again.</AlertDescription></Alert>`,
  }),
}

export const DestructiveWithProps: Story = {
  render: () => ({
    components: { Alert },
    template: `<Alert variant="destructive" class="max-w-md" title="Error" description="Your session has expired. Please log in again." />`,
  }),
}

export const Dark: Story = {
  ...Default,
  globals: { theme: 'dark' },
}
