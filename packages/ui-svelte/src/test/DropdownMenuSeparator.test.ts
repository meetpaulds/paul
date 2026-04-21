import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DropdownMenuSeparator from '../../lib/components/DropdownMenuSeparator.svelte'

describe('DropdownMenuSeparator', () => {
  it('renders without errors', () => {
    expect(() => render(DropdownMenuSeparator)).not.toThrow()
  })
})
