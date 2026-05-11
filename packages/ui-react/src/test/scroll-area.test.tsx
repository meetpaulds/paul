import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollArea } from '../components/scroll-area'

describe('ScrollArea', () => {
  it('renders children', () => {
    render(<ScrollArea><p>Scrollable content</p></ScrollArea>)
    expect(screen.getByText('Scrollable content')).toBeInTheDocument()
  })

  it('applies overflow-hidden class', () => {
    const { container } = render(<ScrollArea><p>Content</p></ScrollArea>)
    expect(container.firstChild).toHaveClass('overflow-hidden')
  })

  it('merges custom className', () => {
    const { container } = render(<ScrollArea className="custom-scroll"><p>Content</p></ScrollArea>)
    expect(container.firstChild).toHaveClass('custom-scroll')
  })
})

describe('ScrollBar', () => {
  it('renders scroll area viewport', () => {
    const { container } = render(
      <ScrollArea>
        <div style={{ height: 1000 }}>Long content</div>
      </ScrollArea>
    )
    expect(container.querySelector('[data-radix-scroll-area-viewport]')).toBeInTheDocument()
  })
})
