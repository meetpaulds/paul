<script lang="ts">
  import Calendar from '@meetpaul/ui-svelte/Calendar.svelte'
  let selected = $state<Date | undefined>(undefined)
</script>

<div class="p-4">
  <Calendar bind:selected class="rounded-md border" />
  {#if selected}
    <p class="mt-2 text-sm text-muted-foreground">Selected: {selected.toDateString()}</p>
  {/if}
</div>
