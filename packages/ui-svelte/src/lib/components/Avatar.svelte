<script lang="ts">
  /**
   * Avatar — container for user avatars.
   *
   * @example
   * ```svelte
   * <Avatar>
   *   <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
   *   <AvatarFallback>SC</AvatarFallback>
   * </Avatar>
   * ```
   */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<span class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', cls)}>
  {@render children?.()}
</span>
