import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress } from '../components/progress'

describe('Progress', () => {
  it('renders a progressbar', () => {
    render(<Progress value={50} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders with 0 value', () => {
    render(<Progress value={0} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders with 100 value', () => {
    render(<Progress value={100} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<Progress value={50} className="custom-progress" />)
    expect(screen.getByRole('progressbar')).toHaveClass('custom-progress')
  })
})
