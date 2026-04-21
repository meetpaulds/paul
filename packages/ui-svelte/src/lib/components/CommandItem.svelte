<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', onclick, children, ...props }: { class?: string; onclick?: any; children?: Snippet; [key: string]: unknown } = $props()
</script>
<div role="option" aria-selected="false" {onclick} class={['relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground', className].join(' ')} {...props}>{@render children?.()}</div>
