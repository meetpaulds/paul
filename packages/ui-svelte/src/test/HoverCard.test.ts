import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import HoverCard from '../../lib/components/HoverCard.svelte'

describe('HoverCard', () => {
  it('renders without errors', () => {
    expect(() => render(HoverCard)).not.toThrow()
  })
})
