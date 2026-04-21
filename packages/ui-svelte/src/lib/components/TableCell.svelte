<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<td class={['p-4 align-middle [&:has([role=checkbox])]:pr-0', className].join(' ')} {...props}>{@render children?.()}</td>
