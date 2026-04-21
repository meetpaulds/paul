<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<ul class={['flex w-full min-w-0 flex-col gap-1', className].join(' ')} {...props}>{@render children?.()}</ul>
