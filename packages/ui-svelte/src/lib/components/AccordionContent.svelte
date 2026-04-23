<script lang="ts">
  /** Collapsible content panel rendered below AccordionTrigger. */
  import { getContext } from 'svelte'
  import { melt } from '@melt-ui/svelte'
  import { cn } from '../utils'

  interface Props {
    value: string
    class?: string
    children?: import('svelte').Snippet
  }
  const { value, class: cls = '', children }: Props = $props()
  const accordion = getContext<any>('paul-accordion')
</script>
<div use:melt={accordion.elements.content(value)} class={cn('overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', cls)}>
  <div class="pb-4 pt-0">{@render children?.()}</div>
</div>
