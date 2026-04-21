import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Slider from '../../lib/components/Slider.svelte'

describe('Slider', () => {
  it('renders without errors', () => {
    expect(() => render(Slider)).not.toThrow()
  })
})
