<script lang="ts">
  import Sonner from '@meetpaul/ui-svelte/Sonner.svelte'
  let sonnerRef: any

  function showToast() {
    if (sonnerRef?.toast) sonnerRef.toast('Event has been created', 'default')
  }
</script>

<div class="relative flex flex-col items-center gap-4">
  <button onclick={showToast} class="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
    Show Toast
  </button>
  <Sonner bind:this={sonnerRef} />
</div>
