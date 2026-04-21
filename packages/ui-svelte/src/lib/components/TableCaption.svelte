<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<caption class={['mt-4 text-sm text-muted-foreground', className].join(' ')} {...props}>{@render children?.()}</caption>
