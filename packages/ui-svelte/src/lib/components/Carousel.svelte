<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet; [key: string]: unknown } = $props()
  let current = $state(0)
  let items: HTMLElement[] = $state([])

  function prev() { current = Math.max(0, current - 1) }
  function next() { current = Math.min(items.length - 1, current + 1) }
</script>

<div class={['relative overflow-hidden', className].join(' ')} {...props}>
  <div class="flex transition-transform duration-300" style={`transform: translateX(-${current * 100}%)`}>
    {@render children?.()}
  </div>
  <button onclick={prev} disabled={current === 0} aria-label="Previous slide" class="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border bg-background shadow flex items-center justify-center disabled:opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
  </button>
  <button onclick={next} aria-label="Next slide" class="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border bg-background shadow flex items-center justify-center disabled:opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
  </button>
</div>
