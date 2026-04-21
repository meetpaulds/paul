<script lang="ts">
  /** Hidden content area of a Collapsible. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
  const collapsible = getContext<ReturnType<typeof import('@melt-ui/svelte').createCollapsible>>('paul-collapsible')
</script>
<div use:melt={collapsible.elements.content} class={cls}>{@render children?.()}</div>
