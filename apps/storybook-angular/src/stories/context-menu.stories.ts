import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ContextMenuComponent, ContextMenuItemComponent, ContextMenuLabelComponent, ContextMenuSeparatorComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/ContextMenu',
  component: ContextMenuComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ContextMenuComponent, ContextMenuItemComponent, ContextMenuLabelComponent, ContextMenuSeparatorComponent] })],
  render: () => ({
    template: `
      <paul-context-menu>
        <div slot="trigger" class="flex h-24 w-48 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
          Right-click here
        </div>
        <paul-context-menu-label>Actions</paul-context-menu-label>
        <paul-context-menu-item>Back</paul-context-menu-item>
        <paul-context-menu-item>Forward</paul-context-menu-item>
        <paul-context-menu-separator />
        <paul-context-menu-item>Reload</paul-context-menu-item>
      </paul-context-menu>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
