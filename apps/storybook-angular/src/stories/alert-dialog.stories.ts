import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AlertDialogComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/AlertDialog',
  component: AlertDialogComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [AlertDialogComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <div>
        <button paul-button (click)="open = true">Delete account</button>
        <paul-alert-dialog [open]="open" (openChange)="open = $event">
          <div class="flex flex-col gap-2">
            <h2 class="text-lg font-semibold">Are you absolutely sure?</h2>
            <p class="text-sm text-muted-foreground">This action cannot be undone.</p>
            <div class="flex justify-end gap-2 mt-4">
              <button paul-button variant="outline" (click)="open = false">Cancel</button>
              <button paul-button variant="destructive" (click)="open = false">Delete</button>
            </div>
          </div>
        </paul-alert-dialog>
      </div>
    `,
    props: { open: false },
  }),
}
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
