<script lang="ts">
  import Sheet from '@meetpaul/ui-svelte/Sheet.svelte'
  let open = $state(false)
</script>

<div>
  <button onclick={() => (open = true)} class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
    Open Sheet
  </button>
  <Sheet bind:open side="right">
    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-semibold">Edit profile</h2>
      <p class="text-sm text-muted-foreground">Make changes to your profile here. Click save when you're done.</p>
      <div class="grid gap-2">
        <label class="text-sm font-medium" for="name">Name</label>
        <input id="name" class="h-9 rounded-md border px-3 text-sm" value="Pedro Duarte" />
      </div>
      <div class="mt-auto flex justify-end">
        <button onclick={() => (open = false)} class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Save changes</button>
      </div>
    </div>
  </Sheet>
</div>
