import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from '../components/context-menu'

const DefaultContextMenu = () => (
  <ContextMenu>
    <ContextMenuTrigger asChild>
      <div data-testid="trigger-area">Right-click here</div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Options</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>Open</ContextMenuItem>
      <ContextMenuItem>Edit</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)

describe('ContextMenu', () => {
  it('renders trigger area', () => {
    render(<DefaultContextMenu />)
    expect(screen.getByTestId('trigger-area')).toBeInTheDocument()
  })

  it('content not visible initially', () => {
    render(<DefaultContextMenu />)
    expect(screen.queryByText('Open')).not.toBeInTheDocument()
  })

  it('opens on end-click', async () => {
    const user = userEvent.setup()
    render(<DefaultContextMenu />)
    await user.pointer({ target: screen.getByTestId('trigger-area'), keys: '[MouseRight]' })
    expect(screen.getByText('Open')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
  })

  it('renders label when open', async () => {
    const user = userEvent.setup()
    render(<DefaultContextMenu />)
    await user.pointer({ target: screen.getByTestId('trigger-area'), keys: '[MouseRight]' })
    expect(screen.getByText('Options')).toBeInTheDocument()
  })
})
