<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<ul class={['flex w-full min-w-0 flex-col gap-1', className].join(' ')} {...props}>{@render children?.()}</ul>
