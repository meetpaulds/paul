<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<th class={['h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', className].join(' ')} {...props}>{@render children?.()}</th>
