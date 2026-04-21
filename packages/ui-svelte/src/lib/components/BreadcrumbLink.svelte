<script lang="ts">
  import type { Snippet } from 'svelte'
  let { href = '#', class: className = '', children, ...props} = $props()
</script>
<a {href} class={['transition-colors hover:text-foreground', className].join(' ')} {...props}>{@render children?.()}</a>
