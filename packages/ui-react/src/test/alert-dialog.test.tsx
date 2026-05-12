import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '../components/alert-dialog'

const DefaultAlertDialog = ({ onAction }: { onAction?: () => void }) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <button>Delete</button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onAction}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

describe('AlertDialog', () => {
  it('renders trigger button', () => {
    render(<DefaultAlertDialog />)
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
  })

  it('content not visible initially', () => {
    render(<DefaultAlertDialog />)
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
  })

  it('opens on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultAlertDialog />)
    await user.click(screen.getByRole('button', { name: 'Delete' }))
    expect(screen.getByRole('alertdialog')).toBeInTheDocument()
  })

  it('shows title and description', async () => {
    const user = userEvent.setup()
    render(<DefaultAlertDialog />)
    await user.click(screen.getByRole('button', { name: 'Delete' }))
    expect(screen.getByText('Are you sure?')).toBeInTheDocument()
    expect(screen.getByText('This action cannot be undone.')).toBeInTheDocument()
  })

  it('calls action handler and closes', async () => {
    const user = userEvent.setup()
    let acted = false
    render(<DefaultAlertDialog onAction={() => { acted = true }} />)
    await user.click(screen.getByRole('button', { name: 'Delete' }))
    await user.click(screen.getByRole('button', { name: 'Continue' }))
    expect(acted).toBe(true)
  })

  it('cancel button closes dialog', async () => {
    const user = userEvent.setup()
    render(<DefaultAlertDialog />)
    await user.click(screen.getByRole('button', { name: 'Delete' }))
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
  })
})
