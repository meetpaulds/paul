<script lang="ts">
  /** Accessible title for the dialog, announced by screen readers. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
  const dialog = getContext<ReturnType<typeof import('@melt-ui/svelte').createDialog>>('paul-dialog')
</script>
<h2 use:melt={dialog.elements.title} class={cn('text-lg font-semibold leading-none tracking-tight', cls)}>{@render children?.()}</h2>
