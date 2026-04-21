<script lang="ts">
  import AlertDialog from '@meetpaul/ui-svelte/AlertDialog.svelte'
  let open = $state(false)
</script>

<div>
  <button onclick={() => (open = true)} class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
    Open Alert Dialog
  </button>
  <AlertDialog bind:open>
    <div class="flex flex-col space-y-2">
      <h2 class="text-lg font-semibold">Are you absolutely sure?</h2>
      <p class="text-sm text-muted-foreground">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button onclick={() => (open = false)} class="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">Cancel</button>
      <button onclick={() => (open = false)} class="inline-flex items-center justify-center rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90">Continue</button>
    </div>
  </AlertDialog>
</div>
