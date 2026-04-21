import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SheetComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/Sheet',
  component: SheetComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SheetComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <div>
        <button paul-button variant="outline" (click)="open = true">Open Sheet</button>
        <paul-sheet [open]="open" (openChange)="open = $event">
          <h2 class="text-lg font-semibold mb-2">Edit profile</h2>
          <p class="text-sm text-muted-foreground">Make changes to your profile here.</p>
          <div class="mt-4 flex justify-end gap-2">
            <button paul-button variant="outline" (click)="open = false">Cancel</button>
            <button paul-button (click)="open = false">Save</button>
          </div>
        </paul-sheet>
      </div>
    `,
    props: { open: false },
  }),
}
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
