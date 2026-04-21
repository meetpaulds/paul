<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<div class={['px-2 py-1.5 text-sm font-semibold', className].join(' ')} {...props}>{@render children?.()}</div>
