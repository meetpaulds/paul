import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AspectRatio } from '../components/aspect-ratio'

describe('AspectRatio', () => {
  it('renders children', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="test.jpg" alt="Test image" />
      </AspectRatio>
    )
    expect(screen.getByRole('img', { name: 'Test image' })).toBeInTheDocument()
  })

  it('renders container element', () => {
    const { container } = render(
      <AspectRatio ratio={1}>
        <div>content</div>
      </AspectRatio>
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
