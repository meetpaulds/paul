<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', config = {}, children, ...props } = $props()
</script>
<div class={['flex aspect-video justify-center text-xs', className].join(' ')} {...props}>
  {@render children?.()}
</div>
