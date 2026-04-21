<script lang="ts">
  import Drawer from '@meetpaul/ui-svelte/Drawer.svelte'
  let open = $state(false)
</script>

<div>
  <button onclick={() => (open = true)} class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
    Open Drawer
  </button>
  <Drawer bind:open>
    <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted mb-4"></div>
    <h2 class="text-lg font-semibold">Move Goal</h2>
    <p class="mt-2 text-sm text-muted-foreground">Set your daily activity goal.</p>
    <div class="mt-4 flex justify-end">
      <button onclick={() => (open = false)} class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Submit</button>
    </div>
  </Drawer>
</div>
