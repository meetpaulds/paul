<script lang="ts">
  import ContextMenu from '@meetpaul/ui-svelte/ContextMenu.svelte'
</script>

<ContextMenu>
  <div slot="trigger" class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </div>
  <div class="px-1 py-1">
    <div class="px-2 py-1.5 text-sm font-semibold">My Account</div>
    <div class="px-2 py-1.5 text-sm cursor-pointer hover:bg-accent rounded">Profile</div>
    <div class="px-2 py-1.5 text-sm cursor-pointer hover:bg-accent rounded">Billing</div>
    <div class="px-2 py-1.5 text-sm cursor-pointer hover:bg-accent rounded">Settings</div>
  </div>
</ContextMenu>
