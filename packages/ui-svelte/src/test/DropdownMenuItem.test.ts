import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DropdownMenuItem from '../../lib/components/DropdownMenuItem.svelte'

describe('DropdownMenuItem', () => {
  it('renders without errors', () => {
    expect(() => render(DropdownMenuItem)).not.toThrow()
  })
})
