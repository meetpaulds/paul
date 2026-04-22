import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AspectRatio from '../../lib/components/AspectRatio.svelte'

describe('AspectRatio', () => {
  it('renders without errors', () => {
    expect(() => render(AspectRatio)).not.toThrow()
  })
})
