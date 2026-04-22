import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Carousel from '../../lib/components/Carousel.svelte'

describe('Carousel', () => {
  it('renders without errors', () => {
    expect(() => render(Carousel)).not.toThrow()
  })
})
