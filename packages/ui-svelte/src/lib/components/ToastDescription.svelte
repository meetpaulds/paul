<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<div class={['text-sm opacity-90', className].join(' ')} {...props}>{@render children?.()}</div>
