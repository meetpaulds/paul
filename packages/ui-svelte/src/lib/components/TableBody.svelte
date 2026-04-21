<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<tbody class={['[&_tr:last-child]:border-0', className].join(' ')} {...props}>{@render children?.()}</tbody>
