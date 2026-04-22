<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', disabled = false, onclick, children, ...props }: { class?: string; disabled?: boolean; onclick?: any; children?: Snippet; [key: string]: unknown } = $props()
</script>
<div role="menuitem" {onclick} class={['relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className].join(' ')} data-disabled={disabled || undefined} {...props}>{@render children?.()}</div>
