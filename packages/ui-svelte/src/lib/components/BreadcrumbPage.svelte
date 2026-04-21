<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<span role="link" aria-disabled="true" aria-current="page" class={['font-normal text-foreground', className].join(' ')} {...props}>{@render children?.()}</span>
