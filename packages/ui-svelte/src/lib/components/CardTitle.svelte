<script lang="ts">
  /** Primary heading inside CardHeader. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<h3 class={cn('font-semibold leading-none tracking-tight', cls)}>{@render children?.()}</h3>
