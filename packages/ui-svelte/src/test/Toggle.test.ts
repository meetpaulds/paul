import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Toggle from '../../lib/components/Toggle.svelte'

describe('Toggle', () => {
  it('renders without errors', () => {
    expect(() => render(Toggle)).not.toThrow()
  })
})
