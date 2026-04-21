<script lang="ts">
  /**
   * Skeleton — animated loading placeholder.
   *
   * @example
   * ```svelte
   * <Skeleton class="h-4 w-[250px]" />
   * <Skeleton class="h-12 w-12 rounded-full" />
   * ```
   */
  import { cn } from '../utils'
  interface Props { class?: string }
  const { class: cls = '' }: Props = $props()
</script>
<div class={cn('animate-pulse rounded-md bg-primary/10', cls)}></div>
