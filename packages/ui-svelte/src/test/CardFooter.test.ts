import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CardFooter from '../../lib/components/CardFooter.svelte'

describe('CardFooter', () => {
  it('renders without errors', () => {
    expect(() => render(CardFooter)).not.toThrow()
  })
})
