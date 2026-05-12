import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from '../components/checkbox'

describe('Checkbox', () => {
  it('renders a checkbox', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('is unchecked by default', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('can be checked', async () => {
    const user = userEvent.setup()
    render(<Checkbox />)
    await user.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Checkbox disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup()
    let checked = false
    render(<Checkbox onCheckedChange={(val) => { checked = val as boolean }} />)
    await user.click(screen.getByRole('checkbox'))
    expect(checked).toBe(true)
  })

  it('applies custom className', () => {
    render(<Checkbox className="custom-check" />)
    expect(screen.getByRole('checkbox')).toHaveClass('custom-check')
  })
})
