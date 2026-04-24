<script lang="ts">
  import type { Snippet } from 'svelte'
  let { href = '#', isActive = false, class: className = '', children, ...props} = $props()
</script>
<a {href} aria-current={isActive ? 'page' : undefined} class={['inline-flex items-center justify-center rounded-md text-sm font-medium h-11 w-11', isActive ? 'border bg-background shadow-sm' : 'hover:bg-accent hover:text-accent-foreground', className].join(' ')} {...props}>{@render children?.()}</a>
