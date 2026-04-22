import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CarouselItem from '../../lib/components/CarouselItem.svelte'

describe('CarouselItem', () => {
  it('renders without errors', () => {
    expect(() => render(CarouselItem)).not.toThrow()
  })
})
