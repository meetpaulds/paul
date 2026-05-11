import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ButtonGroup } from '../components/button-group'
import { Button } from '../components/button'

describe('ButtonGroup', () => {
  it('renders children buttons', () => {
    render(
      <ButtonGroup>
        <Button>First</Button>
        <Button>Second</Button>
      </ButtonGroup>
    )
    expect(screen.getByRole('button', { name: 'First' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Second' })).toBeInTheDocument()
  })

  it('renders as a div', () => {
    const { container } = render(<ButtonGroup><Button>A</Button></ButtonGroup>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('applies inline-flex class', () => {
    const { container } = render(<ButtonGroup><Button>A</Button></ButtonGroup>)
    expect(container.firstChild).toHaveClass('inline-flex')
  })

  it('merges custom className', () => {
    const { container } = render(<ButtonGroup className="custom-group"><Button>A</Button></ButtonGroup>)
    expect(container.firstChild).toHaveClass('custom-group')
  })
})
