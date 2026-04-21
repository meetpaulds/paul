<script lang="ts">
  // @ts-nocheck
  /** Supporting description rendered below DialogTitle. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
  const dialog = getContext<ReturnType<typeof import('@melt-ui/svelte').createDialog>>('paul-dialog')
</script>
<p use:melt={dialog.elements.description} class={cn('text-sm text-muted-foreground', cls)}>{@render children?.()}</p>
