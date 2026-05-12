<script lang="ts">
  import Calendar from './Calendar.svelte'

  let {
    selected = $bindable<Date | undefined>(undefined),
    placeholder = 'Pick a date',
    locale,
    class: className = '',
  } = $props<{ selected?: Date; placeholder?: string; locale?: string; class?: string }>()

  let open = $state(false)

  function resolveLocale(): string {
    return locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-US')
  }

  let formatted = $derived(
    selected
      ? new Intl.DateTimeFormat(resolveLocale(), { day: 'numeric', month: 'long', year: 'numeric' }).format(selected)
      : null
  )

  function onSelect(date: Date | undefined) {
    selected = date
    open = false
  }
</script>

<div class={['relative inline-block', className].filter(Boolean).join(' ')}>
  <button
    type="button"
    onclick={() => (open = !open)}
    aria-haspopup="dialog"
    aria-expanded={open}
    class="flex h-11 w-64 items-center justify-start gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
    <span class={!formatted ? 'text-muted-foreground' : ''}>{formatted ?? placeholder}</span>
  </button>

  {#if open}
    <div
      role="dialog"
      aria-label="Date picker calendar"
      class="absolute z-50 mt-1 rounded-md border bg-popover shadow-md"
    >
      <Calendar bind:selected={selected} locale={locale} />
    </div>
  {/if}
</div>
