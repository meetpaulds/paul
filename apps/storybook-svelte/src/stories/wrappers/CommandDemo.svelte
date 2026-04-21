<script lang="ts">
  import Command from '@meetpaul/ui-svelte/Command.svelte'
  import CommandGroup from '@meetpaul/ui-svelte/CommandGroup.svelte'
  import CommandItem from '@meetpaul/ui-svelte/CommandItem.svelte'
  import CommandSeparator from '@meetpaul/ui-svelte/CommandSeparator.svelte'
</script>

<div class="rounded-md border shadow-md w-64">
  <Command>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </Command>
</div>
