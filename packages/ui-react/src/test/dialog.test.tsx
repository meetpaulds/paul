import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/dialog'

const DefaultDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button>Open Dialog</button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog description text.</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)

describe('Dialog', () => {
  it('renders trigger button', () => {
    render(<DefaultDialog />)
    expect(screen.getByRole('button', { name: 'Open Dialog' })).toBeInTheDocument()
  })

  it('content is not visible initially', () => {
    render(<DefaultDialog />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens dialog on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultDialog />)
    await user.click(screen.getByRole('button', { name: 'Open Dialog' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows title and description when open', async () => {
    const user = userEvent.setup()
    render(<DefaultDialog />)
    await user.click(screen.getByRole('button', { name: 'Open Dialog' }))
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('Dialog description text.')).toBeInTheDocument()
  })

  it('closes dialog when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<DefaultDialog />)
    await user.click(screen.getByRole('button', { name: 'Open Dialog' }))
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
