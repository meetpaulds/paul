import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '../components/navigation-menu'

const DefaultNav = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/about">About</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

describe('NavigationMenu', () => {
  it('renders navigation triggers', () => {
    render(<DefaultNav />)
    expect(screen.getByRole('button', { name: /getting started/i })).toBeInTheDocument()
  })

  it('renders plain navigation links', () => {
    render(<DefaultNav />)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('opens dropdown on trigger click', async () => {
    const user = userEvent.setup()
    render(<DefaultNav />)
    await user.click(screen.getByRole('button', { name: /getting started/i }))
    expect(screen.getByRole('link', { name: 'Documentation' })).toBeInTheDocument()
  })

  it('applies correct href to links', () => {
    render(<DefaultNav />)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
  })
})
