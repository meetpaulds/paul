<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<ul class={['group flex flex-1 list-none items-center justify-center gap-x-1', className].join(' ')} {...props}>{@render children?.()}</ul>
