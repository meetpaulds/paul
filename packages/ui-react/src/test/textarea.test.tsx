import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from '../components/textarea'

describe('Textarea', () => {
  it('renders a textarea', () => {
    render(<Textarea />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('accepts typed input', async () => {
    const user = userEvent.setup()
    render(<Textarea />)
    await user.type(screen.getByRole('textbox'), 'Hello world')
    expect(screen.getByRole('textbox')).toHaveValue('Hello world')
  })

  it('renders placeholder text', () => {
    render(<Textarea placeholder="Enter message..." />)
    expect(screen.getByPlaceholderText('Enter message...')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Textarea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('merges custom className', () => {
    render(<Textarea className="custom-textarea" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-textarea')
  })
})
