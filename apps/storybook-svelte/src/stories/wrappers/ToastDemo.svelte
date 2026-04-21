<script lang="ts">
  import Toast from '@meetpaul/ui-svelte/Toast.svelte'
  import ToastTitle from '@meetpaul/ui-svelte/ToastTitle.svelte'
  import ToastDescription from '@meetpaul/ui-svelte/ToastDescription.svelte'
  import ToastViewport from '@meetpaul/ui-svelte/ToastViewport.svelte'
  let open = $state(true)
</script>

<div class="relative h-32 w-full">
  <button
    onclick={() => (open = true)}
    class="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
  >
    Show Toast
  </button>
  <ToastViewport>
    <Toast bind:open>
      <div class="flex flex-col gap-1">
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
      </div>
      <button onclick={() => (open = false)} class="ml-auto text-xs underline">Dismiss</button>
    </Toast>
  </ToastViewport>
</div>
