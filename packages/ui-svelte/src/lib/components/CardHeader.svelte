<script lang="ts">
  /** Top section of a Card, containing CardTitle and CardDescription. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('flex flex-col space-y-1.5 p-6', cls)}>{@render children?.()}</div>
