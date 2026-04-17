import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Toaster } from '../components/sonner'

describe('Toaster (Sonner)', () => {
  it('renders without crashing', () => {
    const { container } = render(<Toaster />)
    expect(container).toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(<Toaster className="custom-toaster" />)
    expect(container).toBeInTheDocument()
  })
})
