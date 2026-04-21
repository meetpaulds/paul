<script lang="ts">
  // @ts-nocheck
  /** Trigger that toggles the Collapsible open or closed. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
  const collapsible = getContext<ReturnType<typeof import('@melt-ui/svelte').createCollapsible>>('paul-collapsible')
</script>
<button use:melt={collapsible.elements.trigger} class={cls}>{@render children?.()}</button>
