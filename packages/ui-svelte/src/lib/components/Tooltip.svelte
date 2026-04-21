<script lang="ts">
  // @ts-nocheck
  /**
   * Tooltip — concise text label on hover/focus backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Tooltip content="Save changes">
   *   <Button size="icon" aria-label="Save">
   *     <SaveIcon />
   *   </Button>
   * </Tooltip>
   * ```
   *
   * @accessibility Content becomes tooltip text. For icon-only triggers also add aria-label.
   */
  import { createTooltip, melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { content: string; class?: string; children?: import('svelte').Snippet }
  const { content, class: cls = '', children }: Props = $props()

  const { elements: { trigger, content: tooltipContent, arrow }, states: { open } } = createTooltip({ positioning: { placement: 'top' }, openDelay: 300 })
</script>
<span use:melt={trigger}>{@render children?.()}</span>
{#if $open}
  <div use:melt={tooltipContent} class={cn('z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95', cls)}>
    {content}
    <div use:melt={arrow}></div>
  </div>
{/if}
