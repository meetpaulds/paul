<script lang="ts">
  /** Bottom section of a Card, typically containing action buttons. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('flex items-center p-6 pt-0', cls)}>{@render children?.()}</div>
