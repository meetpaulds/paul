import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Disclosure/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    template: `
      <Accordion type="single" collapsible class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It's animated by default.</AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

export const Dark: Story = {
  ...Default,
  globals: { theme: 'dark' },
}
