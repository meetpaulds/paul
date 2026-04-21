<script lang="ts">
  /** Layout wrapper for the dialog title and description at the top. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('flex flex-col space-y-1.5 text-center sm:text-left', cls)}>{@render children?.()}</div>
