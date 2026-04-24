import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DatePicker } from '../components/date-picker'

describe('DatePicker', () => {
  it('renders placeholder when no date selected', () => {
    render(<DatePicker onSelect={() => {}} />)
    expect(screen.getByText('Pick a date')).toBeInTheDocument()
  })

  it('renders custom placeholder', () => {
    render(<DatePicker onSelect={() => {}} placeholder="Choose date" />)
    expect(screen.getByText('Choose date')).toBeInTheDocument()
  })

  it('renders formatted date when date is provided', () => {
    render(<DatePicker date={new Date(2024, 0, 15)} onSelect={() => {}} />)
    expect(screen.getByText(/January 15, 2024/)).toBeInTheDocument()
  })

  it('opens calendar on trigger click', async () => {
    const user = userEvent.setup()
    render(<DatePicker onSelect={() => {}} />)
    await user.click(screen.getByRole('button'))
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('calls onSelect when a day is clicked', async () => {
    const user = userEvent.setup()
    let selected: Date | undefined
    render(<DatePicker onSelect={(d) => { selected = d }} />)
    await user.click(screen.getByRole('button'))
    const days = screen.getAllByRole('gridcell').filter(
      (el) => el.getAttribute('aria-disabled') !== 'true' && el.textContent?.match(/^\d+$/)
    )
    await user.click(days[0])
    expect(selected).toBeInstanceOf(Date)
  })
})
