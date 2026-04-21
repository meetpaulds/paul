import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Card from '../../lib/components/Card.svelte'

describe('Card', () => {
  it('renders without errors', () => {
    expect(() => render(Card)).not.toThrow()
  })
})
