import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToggleGroup, ToggleGroupItem } from '../components/toggle-group'

describe('ToggleGroup', () => {
  it('renders toggle group items', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })

  it('selects item on click (single)', async () => {
    const user = userEvent.setup()
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
    await user.click(screen.getByText('A'))
    expect(screen.getByText('A').closest('button, [role="radio"]')).toHaveAttribute('data-state', 'on')
  })

  it('allows multiple selections (multiple type)', async () => {
    const user = userEvent.setup()
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
    await user.click(screen.getByText('A'))
    await user.click(screen.getByText('B'))
    expect(screen.getByText('A').closest('[role="button"], button, [role="radio"]')).toHaveAttribute('data-state', 'on')
    expect(screen.getByText('B').closest('[role="button"], button, [role="radio"]')).toHaveAttribute('data-state', 'on')
  })

  it('inherits variant from context', () => {
    render(
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    )
    expect(screen.getByText('A').closest('button, [role="radio"]')).toHaveClass('border')
  })
})
