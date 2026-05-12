import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from '../components/toggle'

describe('Toggle', () => {
  it('renders a toggle button', () => {
    render(<Toggle>Bold</Toggle>)
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument()
  })

  it('is off by default', () => {
    render(<Toggle>Bold</Toggle>)
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'off')
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<Toggle>Bold</Toggle>)
    await user.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'on')
  })

  it('applies default variant class', () => {
    render(<Toggle>Bold</Toggle>)
    expect(screen.getByRole('button')).toHaveClass('bg-transparent')
  })

  it('applies outline variant class', () => {
    render(<Toggle variant="outline">Bold</Toggle>)
    expect(screen.getByRole('button')).toHaveClass('border', 'border-input')
  })

  it('applies sm size class', () => {
    render(<Toggle size="sm">Bold</Toggle>)
    expect(screen.getByRole('button')).toHaveClass('h-8')
  })

  it('is disabled when disabled prop is set', () => {
    render(<Toggle disabled>Bold</Toggle>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
