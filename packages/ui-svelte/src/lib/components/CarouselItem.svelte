<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<div class={['min-w-0 shrink-0 grow-0 basis-full ps-4', className].join(' ')} {...props}>{@render children?.()}</div>
