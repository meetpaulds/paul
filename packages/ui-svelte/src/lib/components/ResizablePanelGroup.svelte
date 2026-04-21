<script lang="ts">
  import type { Snippet } from 'svelte'
  let { direction = 'horizontal', class: className = '', children, ...props} = $props()
</script>
<div class={['flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className].join(' ')} data-panel-group-direction={direction} {...props}>{@render children?.()}</div>
