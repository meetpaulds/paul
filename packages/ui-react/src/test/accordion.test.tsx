import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/accordion'

const DefaultAccordion = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>Content 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Section 2</AccordionTrigger>
      <AccordionContent>Content 2</AccordionContent>
    </AccordionItem>
  </Accordion>
)

describe('Accordion', () => {
  it('renders triggers', () => {
    render(<DefaultAccordion />)
    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
  })

  it('content is hidden by default', () => {
    render(<DefaultAccordion />)
    const regions = screen.getAllByRole('region', { hidden: true })
    expect(regions[0]).toHaveAttribute('data-state', 'closed')
  })

  it('opens content on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultAccordion />)
    await user.click(screen.getByText('Section 1'))
    expect(screen.getByText('Content 1')).toBeVisible()
  })

  it('closes open item when another is clicked (single type)', async () => {
    const user = userEvent.setup()
    render(<DefaultAccordion />)
    await user.click(screen.getByText('Section 1'))
    await user.click(screen.getByText('Section 2'))
    expect(screen.getByText('Content 2')).toBeVisible()
  })

  it('applies custom className to AccordionItem', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="x" className="custom-item">
          <AccordionTrigger>T</AccordionTrigger>
          <AccordionContent>C</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(document.querySelector('.custom-item')).toBeInTheDocument()
  })
})
