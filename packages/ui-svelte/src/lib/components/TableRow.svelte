<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<tr class={['border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className].join(' ')} {...props}>{@render children?.()}</tr>
