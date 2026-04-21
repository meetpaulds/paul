<script lang="ts">
  import type { Snippet } from 'svelte'
  let { defaultSize = 50, class: className = '', children, ...props} = $props()
</script>
<div class={['flex flex-col overflow-hidden', className].join(' ')} style={`flex: ${defaultSize} 1 0px`} {...props}>{@render children?.()}</div>
