<script lang="ts">
  import Sidebar from '@meetpaul/ui-svelte/Sidebar.svelte'
  import SidebarHeader from '@meetpaul/ui-svelte/SidebarHeader.svelte'
  import SidebarContent from '@meetpaul/ui-svelte/SidebarContent.svelte'
  import SidebarMenu from '@meetpaul/ui-svelte/SidebarMenu.svelte'
  import SidebarMenuItem from '@meetpaul/ui-svelte/SidebarMenuItem.svelte'
  import SidebarMenuButton from '@meetpaul/ui-svelte/SidebarMenuButton.svelte'
</script>

<div class="h-64 w-80 overflow-hidden rounded-md border">
  <Sidebar>
    <SidebarHeader>
      <span class="font-semibold">My App</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>Settings</SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>Profile</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <div slot="content" class="p-4 text-sm text-muted-foreground">Main content area</div>
  </Sidebar>
</div>
