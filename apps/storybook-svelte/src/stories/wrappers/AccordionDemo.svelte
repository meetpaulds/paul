<script lang="ts">
  import Accordion from '@meetpaul/ui-svelte/Accordion.svelte'
  import AccordionItem from '@meetpaul/ui-svelte/AccordionItem.svelte'
  import AccordionTrigger from '@meetpaul/ui-svelte/AccordionTrigger.svelte'
  import AccordionContent from '@meetpaul/ui-svelte/AccordionContent.svelte'
</script>

<Accordion type="single" collapsible class="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">Is it accessible?</AccordionTrigger>
    <AccordionContent value="item-1">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger value="item-2">Is it styled?</AccordionTrigger>
    <AccordionContent value="item-2">Yes. It comes with default styles that match the other components.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger value="item-3">Is it animated?</AccordionTrigger>
    <AccordionContent value="item-3">Yes. It's animated by default.</AccordionContent>
  </AccordionItem>
</Accordion>
