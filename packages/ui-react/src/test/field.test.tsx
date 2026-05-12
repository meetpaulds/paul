import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Field } from '../components/field'
import { Input } from '../components/input'

describe('Field', () => {
  it('renders children', () => {
    render(<Field><Input /></Field>)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Field label="Email"><Input /></Field>)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('associates label with child input via id', () => {
    render(<Field label="Email"><Input /></Field>)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders error message when provided', () => {
    render(<Field error="This field is required"><Input /></Field>)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('renders hint when no error', () => {
    render(<Field hint="Enter your email"><Input /></Field>)
    expect(screen.getByText('Enter your email')).toBeInTheDocument()
  })

  it('hides hint when error is present', () => {
    render(<Field hint="Hint" error="Error"><Input /></Field>)
    expect(screen.queryByText('Hint')).not.toBeInTheDocument()
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('renders required asterisk when required prop set', () => {
    render(<Field label="Name" required><Input /></Field>)
    expect(screen.getByText('*')).toBeInTheDocument()
  })
})
