import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Separator } from '../components/separator'

describe('Separator', () => {
  it('renders a separator element', () => {
    const { container } = render(<Separator />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders horizontal by default', () => {
    const { container } = render(<Separator />)
    expect(container.firstChild).toHaveClass('h-[1px]', 'w-full')
  })

  it('renders vertical orientation', () => {
    const { container } = render(<Separator orientation="vertical" />)
    expect(container.firstChild).toHaveClass('h-full', 'w-[1px]')
  })

  it('merges custom className', () => {
    const { container } = render(<Separator className="custom-sep" />)
    expect(container.firstChild).toHaveClass('custom-sep')
  })
})
