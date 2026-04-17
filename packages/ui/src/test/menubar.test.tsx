import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
} from '../components/menubar'

const DefaultMenubar = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarLabel>Actions</MenubarLabel>
        <MenubarSeparator />
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>Save</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Undo</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
)

describe('Menubar', () => {
  it('renders menu triggers', () => {
    render(<DefaultMenubar />)
    expect(screen.getByRole('menuitem', { name: 'File' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument()
  })

  it('content not visible initially', () => {
    render(<DefaultMenubar />)
    expect(screen.queryByText('New Tab')).not.toBeInTheDocument()
  })

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultMenubar />)
    await user.click(screen.getByRole('menuitem', { name: 'File' }))
    expect(screen.getByText('New Tab')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
  })

  it('renders shortcut in menu item', async () => {
    const user = userEvent.setup()
    render(<DefaultMenubar />)
    await user.click(screen.getByRole('menuitem', { name: 'File' }))
    expect(screen.getByText('⌘T')).toBeInTheDocument()
  })

  it('renders label in menu', async () => {
    const user = userEvent.setup()
    render(<DefaultMenubar />)
    await user.click(screen.getByRole('menuitem', { name: 'File' }))
    expect(screen.getByText('Actions')).toBeInTheDocument()
  })
})
