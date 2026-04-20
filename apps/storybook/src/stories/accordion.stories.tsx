import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { expect, userEvent, within } from 'storybook/test'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@meetpaul/ui'

const meta = {
  title: 'Disclosure/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-full max-w-md',
  },
  render: (args: React.ComponentProps<typeof Accordion>) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: /is it accessible/i })
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('data-state', 'open')
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('data-state', 'closed')
  },
}

export const Dark: Story = {
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-full max-w-md',
  },
  render: (args: React.ComponentProps<typeof Accordion>) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  globals: { theme: 'dark' },
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    className: 'w-full max-w-md',
  },
  render: (args: React.ComponentProps<typeof Accordion>) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content for item 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content for item 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
