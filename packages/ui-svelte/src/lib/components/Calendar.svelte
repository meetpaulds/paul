<script lang="ts">
  let { selected = $bindable<Date | undefined>(undefined), class: className = '', locale, ...props } = $props<{ selected?: Date; class?: string; locale?: string; [key: string]: unknown }>()

  let today = new Date()
  let viewing = $state(new Date(today.getFullYear(), today.getMonth(), 1))

  function resolveLocale(): string {
    return locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-US')
  }

  function getWeekStart(loc: string): number {
    try {
      const info = (new Intl.Locale(loc) as unknown as { weekInfo?: { firstDay: number } }).weekInfo
      if (info) return info.firstDay
    } catch { /* ignore */ }
    const table: Record<string, number> = { de: 1, fr: 1, it: 1, es: 1, ar: 0, en: 0 }
    return table[loc.split('-')[0]] ?? 0
  }

  let weekStart = $derived(getWeekStart(resolveLocale()))

  let dayNames = $derived(() => {
    const loc = resolveLocale()
    const fmt = new Intl.DateTimeFormat(loc, { weekday: 'short' })
    const ws = weekStart
    const sunBased = Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2024, 0, 7 + i)))
    return [...sunBased.slice(ws), ...sunBased.slice(0, ws)]
  })()

  let daysInMonth = $derived(new Date(viewing.getFullYear(), viewing.getMonth() + 1, 0).getDate())
  let firstDow = $derived(new Date(viewing.getFullYear(), viewing.getMonth(), 1).getDay())
  let leadingBlanks = $derived(((firstDow - weekStart + 7) % 7))
  let monthLabel = $derived(
    new Intl.DateTimeFormat(resolveLocale(), { month: 'long', year: 'numeric' })
      .format(new Date(viewing.getFullYear(), viewing.getMonth(), 1))
  )

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
    <button onclick={prevMonth} aria-label="Go to previous month" class="inline-flex items-center justify-center h-11 w-11 rounded-md border border-input bg-background hover:bg-accent">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <span class="text-sm font-medium">{monthLabel}</span>
    <button onclick={nextMonth} aria-label="Go to next month" class="inline-flex items-center justify-center h-11 w-11 rounded-md border border-input bg-background hover:bg-accent">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>
  <div class="grid grid-cols-7 gap-1 mb-1">
    {#each dayNames as day}
      <div class="text-center text-xs text-muted-foreground">{day}</div>
    {/each}
  </div>
  <div class="grid grid-cols-7 gap-1">
    {#each Array(leadingBlanks) as _}
      <div></div>
    {/each}
    {#each Array(daysInMonth) as _, i}
      {@const d = i + 1}
      <button onclick={() => selectDay(d)} class={['h-11 w-11 rounded-md text-sm text-center hover:bg-accent', isSame(d) ? 'bg-primary text-primary-foreground hover:bg-primary' : '', isToday(d) && !isSame(d) ? 'font-bold underline' : ''].join(' ')}>{d}</button>
    {/each}
  </div>
</div>
