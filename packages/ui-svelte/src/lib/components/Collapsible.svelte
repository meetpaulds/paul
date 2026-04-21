<script lang="ts">
  // @ts-nocheck
  /**
   * Collapsible — expandable/collapsible region backed by Melt UI.
   *
   * @example
   * ```svelte
   * <Collapsible>
   *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
   *   <CollapsibleContent>Hidden content</CollapsibleContent>
   * </Collapsible>
   * ```
   */
  import { createCollapsible, melt } from '@melt-ui/svelte'
  import { setContext } from 'svelte'

  interface Props {
    open?: boolean
    class?: string
    children?: import('svelte').Snippet
  }
  const { open = false, class: cls = '', children }: Props = $props()

  const collapsible = createCollapsible({ defaultOpen: false })
  $effect(() => { collapsible.states.open.set(open) })
  setContext('paul-collapsible', collapsible)
</script>
<div use:melt={collapsible.elements.root} class={cls}>{@render children?.()}</div>
