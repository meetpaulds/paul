import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Layout/Sidebar',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { SidebarProvider, Sidebar, SidebarTrigger, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton },
    template: `
      <SidebarProvider>
        <div class="flex h-80 border rounded-md overflow-hidden">
          <Sidebar>
            <SidebarHeader><div class="px-2 text-lg font-semibold">My App</div></SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  <SidebarMenuItem><SidebarMenuButton>Home</SidebarMenuButton></SidebarMenuItem>
                  <SidebarMenuItem><SidebarMenuButton>Profile</SidebarMenuButton></SidebarMenuItem>
                  <SidebarMenuItem><SidebarMenuButton>Settings</SidebarMenuButton></SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter><div class="px-2 text-sm text-muted-foreground">v1.0.0</div></SidebarFooter>
          </Sidebar>
          <div class="flex-1 p-4">
            <SidebarTrigger />
            <p class="text-sm mt-2">Main content area</p>
          </div>
        </div>
      </SidebarProvider>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
