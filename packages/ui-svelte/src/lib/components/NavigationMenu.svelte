<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<nav class={['relative z-10 flex max-w-max flex-1 items-center justify-center', className].join(' ')} {...props}>{@render children?.()}</nav>
