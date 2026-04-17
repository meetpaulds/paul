import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Calendar } from '../components/calendar'

describe('Calendar', () => {
  it('renders a grid', () => {
    render(<Calendar mode="single" />)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Calendar mode="single" />)
    expect(screen.getByRole('button', { name: /previous month/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next month/i })).toBeInTheDocument()
  })

  it('renders day cells', () => {
    render(<Calendar mode="single" />)
    const cells = screen.getAllByRole('gridcell')
    expect(cells.length).toBeGreaterThan(0)
  })

  it('calls onSelect when a day is clicked', async () => {
    const user = userEvent.setup()
    let selected: Date | undefined
    render(<Calendar mode="single" onSelect={(d) => { selected = d }} />)
    const enabledCells = screen.getAllByRole('gridcell').filter(
      (el) => el.getAttribute('aria-disabled') !== 'true' && el.textContent?.match(/^\d+$/)
    )
    await user.click(enabledCells[0])
    expect(selected).toBeInstanceOf(Date)
  })

  it('navigates to next month', async () => {
    const user = userEvent.setup()
    render(<Calendar mode="single" />)
    const initialHeading = screen.getAllByRole('presentation')[0].textContent
    await user.click(screen.getByRole('button', { name: /next month/i }))
    expect(screen.getAllByRole('presentation')[0].textContent).not.toBe(initialHeading)
  })
})
