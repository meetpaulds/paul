import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popover, PopoverTrigger, PopoverContent } from '../components/popover'

describe('Popover', () => {
  it('renders trigger', () => {
    render(
      <Popover>
        <PopoverTrigger asChild><button>Open</button></PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument()
  })

  it('content not visible initially', () => {
    render(
      <Popover>
        <PopoverTrigger asChild><button>Open</button></PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument()
  })

  it('shows content on trigger click', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger asChild><button>Open</button></PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )
    await user.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })
})
