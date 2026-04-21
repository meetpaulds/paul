import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ToastComponent, ToastTitleComponent, ToastDescriptionComponent, ToastViewportComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Feedback/Toast',
  component: ToastViewportComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ToastComponent, ToastTitleComponent, ToastDescriptionComponent, ToastViewportComponent, ButtonComponent] })],
  render: () => ({
    template: `
      <div class="relative h-32 w-80">
        <paul-toast [open]="true">
          <paul-toast-title>Scheduled: Catch up</paul-toast-title>
          <paul-toast-description>Friday, February 10, 2023 at 5:57 PM</paul-toast-description>
        </paul-toast>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
