import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../components/sheet'

const DefaultSheet = ({ side }: { side?: 'left' | 'right' | 'top' | 'bottom' }) => (
  <Sheet>
    <SheetTrigger asChild>
      <button>Open Sheet</button>
    </SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>Sheet description text.</SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
)

describe('Sheet', () => {
  it('renders trigger button', () => {
    render(<DefaultSheet />)
    expect(screen.getByRole('button', { name: 'Open Sheet' })).toBeInTheDocument()
  })

  it('content is not visible initially', () => {
    render(<DefaultSheet />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens sheet on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultSheet />)
    await user.click(screen.getByRole('button', { name: 'Open Sheet' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows title and description when open', async () => {
    const user = userEvent.setup()
    render(<DefaultSheet />)
    await user.click(screen.getByRole('button', { name: 'Open Sheet' }))
    expect(screen.getByText('Sheet Title')).toBeInTheDocument()
    expect(screen.getByText('Sheet description text.')).toBeInTheDocument()
  })

  it('closes when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<DefaultSheet />)
    await user.click(screen.getByRole('button', { name: 'Open Sheet' }))
    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('applies left side variant', async () => {
    const user = userEvent.setup()
    render(<DefaultSheet side="left" />)
    await user.click(screen.getByRole('button', { name: 'Open Sheet' }))
    const dialog = screen.getByRole('dialog')
    expect(dialog.className).toContain('start-0')
  })
})
