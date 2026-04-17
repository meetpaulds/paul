import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../components/collapsible'

describe('Collapsible', () => {
  it('renders trigger', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger asChild><button>Toggle</button></CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    )
    expect(screen.getByRole('button', { name: 'Toggle' })).toBeInTheDocument()
  })

  it('content not visible by default', () => {
    const { container } = render(
      <Collapsible>
        <CollapsibleTrigger asChild><button>Toggle</button></CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    )
    const content = container.querySelector('[data-state="closed"]')
    expect(content).toBeInTheDocument()
  })

  it('reveals content on trigger click', async () => {
    const user = userEvent.setup()
    render(
      <Collapsible>
        <CollapsibleTrigger asChild><button>Toggle</button></CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    )
    await user.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(screen.getByText('Hidden content')).toBeVisible()
  })
})
