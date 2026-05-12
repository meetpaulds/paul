import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from '../components/label'

describe('Label', () => {
  it('renders label text', () => {
    render(<Label>Email address</Label>)
    expect(screen.getByText('Email address')).toBeInTheDocument()
  })

  it('associates with input via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <input id="email" />
      </>
    )
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('applies base text styling', () => {
    render(<Label>Label</Label>)
    expect(screen.getByText('Label')).toHaveClass('text-sm', 'font-medium')
  })

  it('merges custom className', () => {
    render(<Label className="custom-label">Label</Label>)
    expect(screen.getByText('Label')).toHaveClass('custom-label')
  })
})
