import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '../components/drawer'

const DefaultDrawer = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <button>Open Drawer</button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>Drawer description.</DrawerDescription>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>
)

describe('Drawer', () => {
  it('renders trigger button', () => {
    render(<DefaultDrawer />)
    expect(screen.getByRole('button', { name: 'Open Drawer' })).toBeInTheDocument()
  })

  it('content not visible initially', () => {
    render(<DefaultDrawer />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens drawer on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultDrawer />)
    await user.click(screen.getByRole('button', { name: 'Open Drawer' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows title and description when open', async () => {
    const user = userEvent.setup()
    render(<DefaultDrawer />)
    await user.click(screen.getByRole('button', { name: 'Open Drawer' }))
    expect(screen.getByText('Drawer Title')).toBeInTheDocument()
    expect(screen.getByText('Drawer description.')).toBeInTheDocument()
  })
})
