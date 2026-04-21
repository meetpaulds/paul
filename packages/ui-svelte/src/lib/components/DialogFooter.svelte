<script lang="ts">
  /** Layout wrapper for action buttons at the bottom of the dialog. */
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', cls)}>{@render children?.()}</div>
