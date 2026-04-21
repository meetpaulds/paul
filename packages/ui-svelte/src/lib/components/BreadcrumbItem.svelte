<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<li class={['inline-flex items-center gap-1.5', className].join(' ')} {...props}>{@render children?.()}</li>
