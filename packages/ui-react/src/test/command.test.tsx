import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandShortcut,
} from '../components/command'

const DefaultCommand = () => (
  <Command>
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
        <CommandItem>Search</CommandItem>
        <CommandItem>
          Settings
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
)

describe('Command', () => {
  it('renders command input', () => {
    render(<DefaultCommand />)
    expect(screen.getByPlaceholderText('Type a command...')).toBeInTheDocument()
  })

  it('renders list items', () => {
    render(<DefaultCommand />)
    expect(screen.getByText('Calendar')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('renders shortcut', () => {
    render(<DefaultCommand />)
    expect(screen.getByText('⌘S')).toBeInTheDocument()
  })

  it('filters items on input', async () => {
    const user = userEvent.setup()
    render(<DefaultCommand />)
    await user.type(screen.getByPlaceholderText('Type a command...'), 'cal')
    expect(screen.getByText('Calendar')).toBeInTheDocument()
  })
})
