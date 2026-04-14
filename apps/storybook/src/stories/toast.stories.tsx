import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@meetpaul/ui'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>Scheduled: Catch up</ToastTitle>
          <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}

export const WithAction: Story = {
  render: () => (
    <ToastProvider>
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
          <ToastDescription>There was a problem with your request.</ToastDescription>
        </div>
        <ToastAction altText="Try again">Try again</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}

export const Destructive: Story = {
  render: () => (
    <ToastProvider>
      <Toast variant="destructive">
        <div className="grid gap-1">
          <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
          <ToastDescription>There was a problem with your request.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}
