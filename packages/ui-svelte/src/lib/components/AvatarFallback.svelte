<script lang="ts">
  /** Fallback initials or icon shown when AvatarImage cannot load. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<span class={cn('flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium', cls)}>
  {@render children?.()}
</span>
