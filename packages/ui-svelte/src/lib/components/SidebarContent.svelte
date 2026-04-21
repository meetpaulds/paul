<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<div class={['flex min-h-0 flex-1 flex-col gap-2 overflow-auto', className].join(' ')} {...props}>{@render children?.()}</div>
