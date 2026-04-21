import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CardHeader from '../../lib/components/CardHeader.svelte'

describe('CardHeader', () => {
  it('renders without errors', () => {
    expect(() => render(CardHeader)).not.toThrow()
  })
})
