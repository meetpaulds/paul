import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SidebarComponent, SidebarHeaderComponent, SidebarContentComponent, SidebarMenuComponent, SidebarMenuItemComponent, SidebarMenuButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Layout/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SidebarComponent, SidebarHeaderComponent, SidebarContentComponent, SidebarMenuComponent, SidebarMenuItemComponent, SidebarMenuButtonComponent] })],
  render: () => ({
    template: `
      <div class="h-64 w-96 rounded-md border overflow-hidden">
        <paul-sidebar [open]="true">
          <div slot="sidebar">
            <paul-sidebar-header>
              <span class="font-semibold text-sm px-2">My App</span>
            </paul-sidebar-header>
            <paul-sidebar-content>
              <paul-sidebar-menu>
                <paul-sidebar-menu-item>
                  <paul-sidebar-menu-button>Dashboard</paul-sidebar-menu-button>
                </paul-sidebar-menu-item>
                <paul-sidebar-menu-item>
                  <paul-sidebar-menu-button>Settings</paul-sidebar-menu-button>
                </paul-sidebar-menu-item>
                <paul-sidebar-menu-item>
                  <paul-sidebar-menu-button>Profile</paul-sidebar-menu-button>
                </paul-sidebar-menu-item>
              </paul-sidebar-menu>
            </paul-sidebar-content>
          </div>
          <div class="p-4 text-sm text-muted-foreground">Main content area</div>
        </paul-sidebar>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
