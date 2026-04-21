import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, ToastViewport } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Toast',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { ToastProvider, Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport },
    template: `
      <ToastProvider>
        <Toast>
          <div class="grid gap-1">
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    `,
  }),
}

export const WithAction: Story = {
  render: () => ({
    components: { ToastProvider, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose, ToastViewport },
    template: `
      <ToastProvider>
        <Toast>
          <div class="grid gap-1">
            <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
            <ToastDescription>There was a problem with your request.</ToastDescription>
          </div>
          <ToastAction alt-text="Try again">Try again</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { ToastProvider, Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport },
    template: `
      <ToastProvider>
        <Toast variant="destructive">
          <div class="grid gap-1">
            <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
            <ToastDescription>There was a problem with your request.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
