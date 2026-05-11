import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Empty } from '../components/empty'

describe('Empty', () => {
  it('renders without crashing', () => {
    const { container } = render(<Empty />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(<Empty title="No results" />)
    expect(screen.getByText('No results')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(<Empty description="Try adjusting your search." />)
    expect(screen.getByText('Try adjusting your search.')).toBeInTheDocument()
  })

  it('renders icon when provided', () => {
    render(<Empty icon={<span data-testid="icon">🔍</span>} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders action when provided', () => {
    render(<Empty action={<button>Retry</button>} />)
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument()
  })

  it('does not render icon container when no icon', () => {
    const { container } = render(<Empty title="Empty" />)
    expect(container.querySelector('.rounded-full')).not.toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(<Empty className="custom-empty" />)
    expect(container.firstChild).toHaveClass('custom-empty')
  })
})
