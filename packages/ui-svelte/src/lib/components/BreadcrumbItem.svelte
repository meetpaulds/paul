<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<li class={['inline-flex items-center gap-1.5', className].join(' ')} {...props}>{@render children?.()}</li>
