<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<div class={['flex flex-col gap-2 p-2', className].join(' ')} {...props}>{@render children?.()}</div>
