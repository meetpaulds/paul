<script lang="ts">
  import type { Snippet } from 'svelte'
  let { heading = '', class: className = '', children, ...props} = $props()
</script>
<div class={['overflow-hidden p-1 text-foreground', className].join(' ')} {...props}>
  {#if heading}
    <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">{heading}</div>
  {/if}
  {@render children?.()}
</div>
