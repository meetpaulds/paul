import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AccordionComponent, AccordionItemComponent, AccordionTriggerComponent, AccordionContentComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Disclosure/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [AccordionComponent, AccordionItemComponent, AccordionTriggerComponent, AccordionContentComponent] })],
  render: () => ({
    template: `
      <paul-accordion type="single" collapsible class="w-full max-w-md">
        <paul-accordion-item value="item-1">
          <paul-accordion-trigger>Is it accessible?</paul-accordion-trigger>
          <paul-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</paul-accordion-content>
        </paul-accordion-item>
        <paul-accordion-item value="item-2">
          <paul-accordion-trigger>Is it styled?</paul-accordion-trigger>
          <paul-accordion-content>Yes. It comes with default styles.</paul-accordion-content>
        </paul-accordion-item>
        <paul-accordion-item value="item-3">
          <paul-accordion-trigger>Is it animated?</paul-accordion-trigger>
          <paul-accordion-content>Yes. It's animated by default.</paul-accordion-content>
        </paul-accordion-item>
      </paul-accordion>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
