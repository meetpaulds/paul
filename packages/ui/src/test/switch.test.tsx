import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from '../components/switch'

describe('Switch', () => {
  it('renders a switch', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'unchecked')
  })

  it('can be toggled on', async () => {
    const user = userEvent.setup()
    render(<Switch />)
    await user.click(screen.getByRole('switch'))
    expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked')
  })

  it('is disabled when disabled prop is set', () => {
    render(<Switch disabled />)
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  it('calls onCheckedChange on toggle', async () => {
    const user = userEvent.setup()
    let value = false
    render(<Switch onCheckedChange={(v) => { value = v }} />)
    await user.click(screen.getByRole('switch'))
    expect(value).toBe(true)
  })

  it('merges custom className', () => {
    render(<Switch className="custom-switch" />)
    expect(screen.getByRole('switch')).toHaveClass('custom-switch')
  })
})
