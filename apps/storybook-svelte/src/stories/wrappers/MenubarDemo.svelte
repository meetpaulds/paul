<script lang="ts">
  import Menubar from '@meetpaul/ui-svelte/Menubar.svelte'
  import MenubarMenu from '@meetpaul/ui-svelte/MenubarMenu.svelte'
  import MenubarTrigger from '@meetpaul/ui-svelte/MenubarTrigger.svelte'
  import MenubarItem from '@meetpaul/ui-svelte/MenubarItem.svelte'
  import MenubarSeparator from '@meetpaul/ui-svelte/MenubarSeparator.svelte'
</script>

<Menubar>
  <MenubarMenu>
    {#snippet trigger({ toggle })}
      <MenubarTrigger onclick={toggle}>File</MenubarTrigger>
    {/snippet}
    <MenubarItem>New Tab</MenubarItem>
    <MenubarItem>New Window</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Share</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Print</MenubarItem>
  </MenubarMenu>
  <MenubarMenu>
    {#snippet trigger({ toggle })}
      <MenubarTrigger onclick={toggle}>Edit</MenubarTrigger>
    {/snippet}
    <MenubarItem>Undo</MenubarItem>
    <MenubarItem>Redo</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Cut</MenubarItem>
    <MenubarItem>Copy</MenubarItem>
    <MenubarItem>Paste</MenubarItem>
  </MenubarMenu>
  <MenubarMenu>
    {#snippet trigger({ toggle })}
      <MenubarTrigger onclick={toggle}>View</MenubarTrigger>
    {/snippet}
    <MenubarItem>Zoom In</MenubarItem>
    <MenubarItem>Zoom Out</MenubarItem>
  </MenubarMenu>
</Menubar>
