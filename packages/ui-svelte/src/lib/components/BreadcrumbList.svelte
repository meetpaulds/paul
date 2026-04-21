<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<ol class={['flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', className].join(' ')} {...props}>{@render children?.()}</ol>
