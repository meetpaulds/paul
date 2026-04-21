<script lang="ts">
  /**
   * AspectRatio — constrains its child to a specific width-to-height ratio.
   *
   * @example
   * ```svelte
   * <AspectRatio ratio={16/9}>
   *   <img src="..." alt="..." class="object-cover w-full h-full" />
   * </AspectRatio>
   * ```
   */
  import { cn } from '../utils'
  interface Props { ratio?: number; class?: string; children?: import('svelte').Snippet }
  const { ratio = 16 / 9, class: cls = '', children }: Props = $props()
  const paddingBottom = $derived((1 / ratio) * 100)
</script>
<div class={cn('block', cls)}>
  <div style="padding-bottom: {paddingBottom}%" class="relative w-full">
    <div class="absolute inset-0">{@render children?.()}</div>
  </div>
</div>
