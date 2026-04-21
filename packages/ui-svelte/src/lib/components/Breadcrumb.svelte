<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, ...props }: { class?: string; children?: Snippet; [key: string]: unknown } = $props()
</script>
<nav aria-label="breadcrumb" class={className} {...props}>{@render children?.()}</nav>
