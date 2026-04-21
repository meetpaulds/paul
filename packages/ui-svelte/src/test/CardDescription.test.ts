import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CardDescription from '../../lib/components/CardDescription.svelte'

describe('CardDescription', () => {
  it('renders without errors', () => {
    expect(() => render(CardDescription)).not.toThrow()
  })
})
