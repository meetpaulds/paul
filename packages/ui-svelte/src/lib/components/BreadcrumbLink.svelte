<script lang="ts">
  import type { Snippet } from 'svelte'
  let { href = '#', class: className = '', children, ...props }: { href?: string; class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<a {href} class={['transition-colors hover:text-foreground', className].join(' ')} {...props}>{@render children?.()}</a>
