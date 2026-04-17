import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarImage, AvatarFallback } from '../components/avatar'

describe('Avatar', () => {
  it('renders avatar container', () => {
    const { container } = render(<Avatar />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders fallback text when image fails', async () => {
    render(
      <Avatar>
        <AvatarImage src="invalid.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('applies custom className to Avatar', () => {
    const { container } = render(<Avatar className="custom-avatar" />)
    expect(container.firstChild).toHaveClass('custom-avatar')
  })

  it('applies custom className to AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback">AB</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText('AB').className).toContain('custom-fallback')
  })

  it('renders rounded shape by default', () => {
    const { container } = render(<Avatar />)
    expect(container.firstChild).toHaveClass('rounded-full')
  })
})
