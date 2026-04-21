import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DrawerComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/Drawer',
  component: DrawerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [DrawerComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <div>
        <button paul-button (click)="open = true">Open Drawer</button>
        <paul-drawer [open]="open" (openChange)="open = $event">
          <h2 class="text-lg font-semibold mb-2">Move Goal</h2>
          <p class="text-sm text-muted-foreground">Set your daily activity goal.</p>
          <div class="mt-4 flex justify-end gap-2">
            <button paul-button variant="outline" (click)="open = false">Cancel</button>
            <button paul-button (click)="open = false">Save</button>
          </div>
        </paul-drawer>
      </div>
    `,
    props: { open: false },
  }),
}
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
