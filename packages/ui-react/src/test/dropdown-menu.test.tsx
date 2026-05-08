import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../components/dropdown-menu'

const DefaultDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button>Open Menu</button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

describe('DropdownMenu', () => {
  it('renders trigger button', () => {
    render(<DefaultDropdown />)
    expect(screen.getByRole('button', { name: 'Open Menu' })).toBeInTheDocument()
  })

  it('content is not visible initially', () => {
    render(<DefaultDropdown />)
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultDropdown />)
    await user.click(screen.getByRole('button', { name: 'Open Menu' }))
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('renders label and separator', async () => {
    const user = userEvent.setup()
    render(<DefaultDropdown />)
    await user.click(screen.getByRole('button', { name: 'Open Menu' }))
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })
})
