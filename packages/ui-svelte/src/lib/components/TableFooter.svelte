<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<tfoot class={['border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className].join(' ')} {...props}>{@render children?.()}</tfoot>
