<script lang="ts">
  /**
   * Empty — empty state placeholder with icon, title, description, and action slots.
   *
   * @example
   * ```svelte
   * <Empty title="No results" description="Try adjusting your filters.">
   *   {#snippet icon()}<SearchX class="h-12 w-12 text-muted-foreground" />{/snippet}
   * </Empty>
   * ```
   */
  import { cn } from '../utils'
  interface Props {
    title?: string
    description?: string
    class?: string
    icon?: import('svelte').Snippet
    action?: import('svelte').Snippet
  }
  const { title = '', description = '', class: cls = '', icon, action }: Props = $props()
</script>
<div class={cn('flex flex-col items-center justify-center gap-4 py-16 text-center', cls)}>
  {#if icon}
    <div class="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
      {@render icon()}
    </div>
  {/if}
  {#if title}<div class="text-xl font-semibold">{title}</div>{/if}
  {#if description}<div class="text-sm text-muted-foreground">{description}</div>{/if}
  {#if action}{@render action()}{/if}
</div>
