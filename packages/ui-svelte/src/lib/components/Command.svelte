<script lang="ts">
  let { class: className = '', ...props } = $props()
  let search = $state('')
</script>

<div class={['flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', className].join(' ')} {...props}>
  <div class="flex items-center border-b px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="mr-2 shrink-0 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input bind:value={search} placeholder="Type a command or search..." class="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" />
  </div>
  <slot {search} />
</div>
