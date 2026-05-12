import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/select'

const DefaultSelect = () => (
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Pick one" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectContent>
  </Select>
)

describe('Select', () => {
  it('renders trigger with placeholder', () => {
    render(<DefaultSelect />)
    expect(screen.getByText('Pick one')).toBeInTheDocument()
  })

  it('renders a combobox trigger', () => {
    render(<DefaultSelect />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('opens dropdown on click', async () => {
    const user = userEvent.setup()
    render(<DefaultSelect />)
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument()
  })

  it('selects an option', async () => {
    const user = userEvent.setup()
    render(<DefaultSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: 'Apple' }))
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })
})
