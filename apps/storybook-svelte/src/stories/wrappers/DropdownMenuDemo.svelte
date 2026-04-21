<script lang="ts">
  import DropdownMenu from '@meetpaul/ui-svelte/DropdownMenu.svelte'
  import DropdownMenuItem from '@meetpaul/ui-svelte/DropdownMenuItem.svelte'
  import DropdownMenuLabel from '@meetpaul/ui-svelte/DropdownMenuLabel.svelte'
  import DropdownMenuSeparator from '@meetpaul/ui-svelte/DropdownMenuSeparator.svelte'
</script>

<DropdownMenu>
  {#snippet trigger({ toggle })}
    <button class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90" onclick={toggle}>
      Open
    </button>
  {/snippet}
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Profile</DropdownMenuItem>
  <DropdownMenuItem>Billing</DropdownMenuItem>
  <DropdownMenuItem>Team</DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Log out</DropdownMenuItem>
</DropdownMenu>
