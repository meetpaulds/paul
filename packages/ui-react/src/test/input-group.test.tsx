import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InputGroup, InputGroupText } from '../components/input-group'
import { Input } from '../components/input'

describe('InputGroup', () => {
  it('renders children', () => {
    render(<InputGroup><Input /></InputGroup>)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('applies default size class', () => {
    const { container } = render(<InputGroup><Input /></InputGroup>)
    expect(container.firstChild).toHaveClass('h-10')
  })

  it('applies sm size class', () => {
    const { container } = render(<InputGroup size="sm"><Input /></InputGroup>)
    expect(container.firstChild).toHaveClass('h-8')
  })

  it('applies lg size class', () => {
    const { container } = render(<InputGroup size="lg"><Input /></InputGroup>)
    expect(container.firstChild).toHaveClass('h-12')
  })

  it('merges custom className', () => {
    const { container } = render(<InputGroup className="custom-group"><Input /></InputGroup>)
    expect(container.firstChild).toHaveClass('custom-group')
  })
})

describe('InputGroupText', () => {
  it('renders text content', () => {
    render(
      <InputGroup>
        <InputGroupText>@</InputGroupText>
        <Input />
      </InputGroup>
    )
    expect(screen.getByText('@')).toBeInTheDocument()
  })

  it('applies bg-muted class', () => {
    render(<InputGroupText>@</InputGroupText>)
    expect(screen.getByText('@')).toHaveClass('bg-muted')
  })
})
