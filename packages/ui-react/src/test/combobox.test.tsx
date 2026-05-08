import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Combobox } from '../components/combobox'

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
]

describe('Combobox', () => {
  it('renders with placeholder', () => {
    render(<Combobox options={options} onChange={() => {}} placeholder="Select framework..." />)
    expect(screen.getByText('Select framework...')).toBeInTheDocument()
  })

  it('renders default placeholder when none provided', () => {
    render(<Combobox options={options} onChange={() => {}} />)
    expect(screen.getByText('Select option...')).toBeInTheDocument()
  })

  it('opens dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Combobox options={options} onChange={() => {}} />)
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
  })

  it('selects option and calls onChange', async () => {
    const user = userEvent.setup()
    let selected = ''
    render(<Combobox options={options} onChange={(v) => { selected = v }} />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('React'))
    expect(selected).toBe('react')
  })

  it('shows selected value label', () => {
    render(<Combobox options={options} value="vue" onChange={() => {}} />)
    expect(screen.getByText('Vue')).toBeInTheDocument()
  })

  it('shows empty message when no match', async () => {
    const user = userEvent.setup()
    render(<Combobox options={options} onChange={() => {}} emptyMessage="Nothing found." />)
    await user.click(screen.getByRole('combobox'))
    await user.type(screen.getByPlaceholderText('Search...'), 'zzz')
    expect(screen.getByText('Nothing found.')).toBeInTheDocument()
  })
})
