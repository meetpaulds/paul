import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DropdownMenuComponent, DropdownMenuItemComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Inputs/Combobox',
  component: DropdownMenuComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [DropdownMenuComponent, DropdownMenuItemComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-dropdown-menu>
        <button slot="trigger" paul-button variant="outline" class="w-48 justify-between">
          {{ selected || 'Select framework...' }} <span class="opacity-50">▾</span>
        </button>
        <paul-dropdown-menu-item (click)="selected = 'Svelte'">Svelte</paul-dropdown-menu-item>
        <paul-dropdown-menu-item (click)="selected = 'React'">React</paul-dropdown-menu-item>
        <paul-dropdown-menu-item (click)="selected = 'Vue'">Vue</paul-dropdown-menu-item>
        <paul-dropdown-menu-item (click)="selected = 'Angular'">Angular</paul-dropdown-menu-item>
      </paul-dropdown-menu>
    `,
    props: { selected: '' },
  }),
}
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
