<script lang="ts">
  /**
   * Separator — a visual divider between content sections backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Separator />
   * <Separator orientation="vertical" class="h-6" />
   * ```
   *
   * @accessibility Renders role="separator" or role="none" based on the decorative prop.
   */
  import { createSeparator, melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props { orientation?: 'horizontal' | 'vertical'; decorative?: boolean; class?: string }
  const { orientation = 'horizontal', decorative = true, class: cls = '' }: Props = $props()

  const { elements: { root } } = createSeparator({ orientation: 'horizontal', decorative: true })
</script>
<div
  use:melt={root}
  class={cn(
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
    cls
  )}
></div>
