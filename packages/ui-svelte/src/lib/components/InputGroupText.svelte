<script lang="ts">
  /** Static text addon rendered inside an InputGroup as a prefix or suffix. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<span class={cn('flex items-center rounded-md border border-input bg-muted px-3 text-sm text-muted-foreground', cls)}>
  {@render children?.()}
</span>
