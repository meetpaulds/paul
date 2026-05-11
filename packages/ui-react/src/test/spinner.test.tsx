import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Spinner } from '../components/spinner'

describe('Spinner', () => {
  it('renders spinner element', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('applies animate-spin class', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toHaveClass('animate-spin')
  })

  it('applies default size class', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toHaveClass('h-4', 'w-4')
  })

  it('applies sm size class', () => {
    const { container } = render(<Spinner size="sm" />)
    expect(container.firstChild).toHaveClass('h-2', 'w-2')
  })

  it('applies lg size class', () => {
    const { container } = render(<Spinner size="lg" />)
    expect(container.firstChild).toHaveClass('h-6', 'w-6')
  })

  it('applies xl size class', () => {
    const { container } = render(<Spinner size="xl" />)
    expect(container.firstChild).toHaveClass('h-8', 'w-8')
  })

  it('merges custom className', () => {
    const { container } = render(<Spinner className="custom-spin" />)
    expect(container.firstChild).toHaveClass('custom-spin')
  })
})
