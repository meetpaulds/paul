import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Skeleton } from '../components/skeleton'

describe('Skeleton', () => {
  it('renders a div', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('applies animate-pulse class', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toHaveClass('animate-pulse')
  })

  it('merges custom className', () => {
    const { container } = render(<Skeleton className="h-4 w-full" />)
    expect(container.firstChild).toHaveClass('h-4', 'w-full')
  })

  it('forwards additional props', () => {
    const { container } = render(<Skeleton data-testid="skel" />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'skel')
  })
})
