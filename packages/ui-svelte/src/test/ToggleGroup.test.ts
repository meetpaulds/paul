import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ToggleGroup from '../../lib/components/ToggleGroup.svelte'

describe('ToggleGroup', () => {
  it('renders without errors', () => {
    expect(() => render(ToggleGroup)).not.toThrow()
  })
})
