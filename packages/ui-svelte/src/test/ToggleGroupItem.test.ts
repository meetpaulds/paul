import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ToggleGroupItem from '../../lib/components/ToggleGroupItem.svelte'

describe('ToggleGroupItem', () => {
  it('renders without errors', () => {
    expect(() => render(ToggleGroupItem)).not.toThrow()
  })
})
