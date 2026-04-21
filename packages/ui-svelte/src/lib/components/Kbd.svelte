<script lang="ts">
  /**
   * Kbd — displays keyboard shortcut keys.
   *
   * @example
   * ```svelte
   * <span>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd></span>
   * ```
   */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<kbd class={cn('pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100', cls)}>
  {@render children?.()}
</kbd>
