import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DropdownMenuComponent, DropdownMenuLabelComponent, DropdownMenuItemComponent, DropdownMenuSeparatorComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/DropdownMenu',
  component: DropdownMenuComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [DropdownMenuComponent, DropdownMenuLabelComponent, DropdownMenuItemComponent, DropdownMenuSeparatorComponent, ButtonComponent] })],
  render: () => ({
    template: `
      <paul-dropdown-menu>
        <button slot="trigger" paul-button variant="outline">Open Menu</button>
        <paul-dropdown-menu-label>My Account</paul-dropdown-menu-label>
        <paul-dropdown-menu-separator />
        <paul-dropdown-menu-item>Profile</paul-dropdown-menu-item>
        <paul-dropdown-menu-item>Billing</paul-dropdown-menu-item>
        <paul-dropdown-menu-item>Settings</paul-dropdown-menu-item>
        <paul-dropdown-menu-separator />
        <paul-dropdown-menu-item>Log out</paul-dropdown-menu-item>
      </paul-dropdown-menu>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
