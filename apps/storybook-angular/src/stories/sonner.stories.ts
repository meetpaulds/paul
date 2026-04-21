import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SonnerComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Feedback/Sonner',
  component: SonnerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SonnerComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <div class="relative flex flex-col items-center gap-4">
        <button paul-button variant="outline" (click)="sonner.toast('Event has been created')">Show Toast</button>
        <paul-sonner #sonner />
      </div>
    `,
  }),
}
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
