<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props} = $props()
</script>
<span role="link" aria-disabled="true" aria-current="page" class={['font-normal text-foreground', className].join(' ')} {...props}>{@render children?.()}</span>
