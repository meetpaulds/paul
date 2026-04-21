<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<ul class={['flex flex-row items-center gap-1', className].join(' ')} {...props}>{@render children?.()}</ul>
