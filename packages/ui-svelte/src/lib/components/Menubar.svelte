<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<div class={['flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className].join(' ')} {...props}>{@render children?.()}</div>
