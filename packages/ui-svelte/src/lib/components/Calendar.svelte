<script lang="ts">
  let { selected = $bindable<Date | undefined>(undefined), class: className = '', ...props } = $props()

  let today = new Date()
  let viewing = $state(new Date(today.getFullYear(), today.getMonth(), 1))

  const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

  let daysInMonth = $derived(new Date(viewing.getFullYear(), viewing.getMonth() + 1, 0).getDate())
  let firstDay = $derived(new Date(viewing.getFullYear(), viewing.getMonth(), 1).getDay())
  let monthLabel = $derived(`${MONTHS[viewing.getMonth()]} ${viewing.getFullYear()}`)

  function prevMonth() {
    viewing = new Date(viewing.getFullYear(), viewing.getMonth() - 1, 1)
  }
  function nextMonth() {
    viewing = new Date(viewing.getFullYear(), viewing.getMonth() + 1, 1)
  }
  function selectDay(d: number) {
    selected = new Date(viewing.getFullYear(), viewing.getMonth(), d)
  }
  function isSame(d: number) {
    return selected && selected.getFullYear() === viewing.getFullYear() && selected.getMonth() === viewing.getMonth() && selected.getDate() === d
  }
  function isToday(d: number) {
    return today.getFullYear() === viewing.getFullYear() && today.getMonth() === viewing.getMonth() && today.getDate() === d
  }
</script>

<div class={['p-3', className].join(' ')} {...props}>
  <div class="flex items-center justify-between mb-2">
    <button onclick={prevMonth} class="inline-flex items-center justify-center h-7 w-7 rounded-md border border-input bg-background hover:bg-accent">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <span class="text-sm font-medium">{monthLabel}</span>
    <button onclick={nextMonth} class="inline-flex items-center justify-center h-7 w-7 rounded-md border border-input bg-background hover:bg-accent">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>
  <div class="grid grid-cols-7 gap-1 mb-1">
    {#each DAYS as day}
      <div class="text-center text-xs text-muted-foreground">{day}</div>
    {/each}
  </div>
  <div class="grid grid-cols-7 gap-1">
    {#each Array(firstDay) as _}
      <div></div>
    {/each}
    {#each Array(daysInMonth) as _, i}
      {@const d = i + 1}
      <button onclick={() => selectDay(d)} class={['h-9 w-9 rounded-md text-sm text-center hover:bg-accent', isSame(d) ? 'bg-primary text-primary-foreground hover:bg-primary' : '', isToday(d) && !isSame(d) ? 'font-bold underline' : ''].join(' ')}>{d}</button>
    {/each}
  </div>
</div>
