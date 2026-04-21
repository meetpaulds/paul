<script lang="ts">
  /** Main body area of a Card. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('p-6 pt-0', cls)}>{@render children?.()}</div>
