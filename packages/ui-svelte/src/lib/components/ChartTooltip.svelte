<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<div class={['rounded-lg border bg-background px-3 py-2 shadow-md text-xs', className].join(' ')} {...props}>{@render children?.()}</div>
