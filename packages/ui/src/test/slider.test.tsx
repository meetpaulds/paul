import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Slider } from '../components/slider'

describe('Slider', () => {
  it('renders a slider', () => {
    render(<Slider defaultValue={[50]} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('renders with default value', () => {
    render(<Slider defaultValue={[30]} min={0} max={100} />)
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '30')
  })

  it('renders with min/max attributes', () => {
    render(<Slider defaultValue={[0]} min={0} max={100} />)
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuemin', '0')
    expect(slider).toHaveAttribute('aria-valuemax', '100')
  })

  it('is disabled when disabled prop is set', () => {
    render(<Slider defaultValue={[50]} disabled />)
    expect(screen.getByRole('slider')).toHaveAttribute('data-disabled')
  })

  it('merges custom className', () => {
    const { container } = render(<Slider defaultValue={[50]} className="custom-slider" />)
    expect(container.firstChild).toHaveClass('custom-slider')
  })
})
