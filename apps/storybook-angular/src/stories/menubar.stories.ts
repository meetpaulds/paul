import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { MenubarComponent, MenubarMenuComponent, MenubarTriggerComponent, MenubarItemComponent, MenubarSeparatorComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Navigation/Menubar',
  component: MenubarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [MenubarComponent, MenubarMenuComponent, MenubarTriggerComponent, MenubarItemComponent, MenubarSeparatorComponent] })],
  render: () => ({
    template: `
      <paul-menubar>
        <paul-menubar-menu>
          <paul-menubar-trigger>File</paul-menubar-trigger>
          <paul-menubar-item>New Tab</paul-menubar-item>
          <paul-menubar-item>New Window</paul-menubar-item>
          <paul-menubar-separator />
          <paul-menubar-item>Print...</paul-menubar-item>
        </paul-menubar-menu>
        <paul-menubar-menu>
          <paul-menubar-trigger>Edit</paul-menubar-trigger>
          <paul-menubar-item>Undo</paul-menubar-item>
          <paul-menubar-item>Redo</paul-menubar-item>
        </paul-menubar-menu>
        <paul-menubar-menu>
          <paul-menubar-trigger>View</paul-menubar-trigger>
          <paul-menubar-item>Zoom In</paul-menubar-item>
          <paul-menubar-item>Zoom Out</paul-menubar-item>
        </paul-menubar-menu>
      </paul-menubar>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
