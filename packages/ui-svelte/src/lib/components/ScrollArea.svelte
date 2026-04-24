<script lang="ts">
  /**
   * ScrollArea — custom scrollable container with styled scrollbars.
   *
   * @example
   * ```svelte
   * <ScrollArea class="h-72 w-48 rounded-md border">
   *   {#each items as item}
   *     <div class="p-4">{item}</div>
   *   {/each}
   * </ScrollArea>
   * ```
   */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('relative overflow-hidden', cls)}>
  <div class="h-full w-full overflow-auto scroll-py-1" tabindex="0">{@render children?.()}</div>
</div>
