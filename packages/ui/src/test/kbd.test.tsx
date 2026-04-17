import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Kbd } from '../components/kbd'

describe('Kbd', () => {
  it('renders keyboard shortcut text', () => {
    render(<Kbd>⌘K</Kbd>)
    expect(screen.getByText('⌘K')).toBeInTheDocument()
  })

  it('renders as kbd element', () => {
    render(<Kbd>Ctrl</Kbd>)
    expect(screen.getByText('Ctrl').tagName).toBe('KBD')
  })

  it('applies base styling', () => {
    render(<Kbd>Enter</Kbd>)
    expect(screen.getByText('Enter')).toHaveClass('font-mono')
  })

  it('merges custom className', () => {
    render(<Kbd className="custom-kbd">Tab</Kbd>)
    expect(screen.getByText('Tab')).toHaveClass('custom-kbd')
  })
})
