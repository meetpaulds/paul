<script lang="ts">
  // @ts-nocheck
  // Accordion -- root container backed by Melt UI.
  // Set type="single" (default) or type="multiple".
  //
  // @example
  //   <Accordion type="single">
  //     <AccordionItem value="item-1">
  //       <AccordionTrigger>Is it accessible?</AccordionTrigger>
  //       <AccordionContent>Yes. Built on Melt UI.</AccordionContent>
  //     </AccordionItem>
  //   </Accordion>
  //
  // @accessibility Keyboard-navigable with Arrow keys. ARIA expanded/controls wired automatically.
  import { createAccordion, melt } from '@melt-ui/svelte'
  import { setContext } from 'svelte'

  interface Props {
    type?: 'single' | 'multiple'
    collapsible?: boolean
    value?: string | string[]
    class?: string
    children?: import('svelte').Snippet
  }
  const { type = 'single', collapsible = false, value, class: cls = '', children }: Props = $props()

  const accordion = createAccordion({ multiple: false, forceVisible: false })
  $effect(() => { accordion.options.multiple.set(type === 'multiple') })
  setContext('paul-accordion', accordion)
</script>
<div use:melt={accordion.elements.root} class={cls}>
  {@render children?.()}
</div>
