import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../components/button'

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Button variant="destructive">Delete</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-destructive')
  })

  it('applies size classes', () => {
    render(<Button size="sm">Small</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('h-8')
  })

  it('is disabled when disabled prop is passed', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('calls onClick handler', async () => {
    const user = userEvent.setup()
    let clicked = false
    render(<Button onClick={() => { clicked = true }}>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(clicked).toBe(true)
  })

  it('applies destructive-outline variant classes', () => {
    render(<Button variant="destructive-outline">Delete</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('text-destructive-text')
    expect(btn.className).toContain('border-destructive')
  })

  it('applies destructive-ghost variant classes', () => {
    render(<Button variant="destructive-ghost">Delete</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('text-destructive-text')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    expect(screen.getByRole('link', { name: 'Link Button' })).toBeInTheDocument()
  })
})
