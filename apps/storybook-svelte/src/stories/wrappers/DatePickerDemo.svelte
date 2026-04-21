<script lang="ts">
  import Calendar from '@meetpaul/ui-svelte/Calendar.svelte'
  import Popover from '@meetpaul/ui-svelte/Popover.svelte'

  let open = $state(false)
  let selected = $state<Date | undefined>(undefined)

  function formatDate(d: Date) {
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }
</script>

<Popover bind:open>
  <button
    slot="trigger"
    class="flex w-56 items-center justify-start gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent {!selected ? 'text-muted-foreground' : ''}"
  >
    <span>📅</span>
    {selected ? formatDate(selected) : 'Pick a date'}
  </button>
  <div class="p-0">
    <Calendar bind:selected onSelect={() => (open = false)} />
  </div>
</Popover>
