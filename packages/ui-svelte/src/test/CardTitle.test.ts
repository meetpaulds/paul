import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CardTitle from '../../lib/components/CardTitle.svelte'

describe('CardTitle', () => {
  it('renders without errors', () => {
    expect(() => render(CardTitle)).not.toThrow()
  })
})
