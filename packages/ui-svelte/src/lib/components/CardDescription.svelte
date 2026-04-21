<script lang="ts">
  /** Secondary supporting text inside CardHeader. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<p class={cn('text-sm text-muted-foreground', cls)}>{@render children?.()}</p>
