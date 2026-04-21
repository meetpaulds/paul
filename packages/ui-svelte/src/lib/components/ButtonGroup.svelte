<script lang="ts">
  /**
   * ButtonGroup — horizontal group of buttons with merged borders.
   *
   * @example
   * ```svelte
   * <ButtonGroup>
   *   <Button variant="outline">Left</Button>
   *   <Button variant="outline">Middle</Button>
   *   <Button variant="outline">Right</Button>
   * </ButtonGroup>
   * ```
   */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('flex [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none', cls)}>
  {@render children?.()}
</div>
