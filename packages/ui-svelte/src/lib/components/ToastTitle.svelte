<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<div class={['text-sm font-semibold', className].join(' ')} {...props}>{@render children?.()}</div>
