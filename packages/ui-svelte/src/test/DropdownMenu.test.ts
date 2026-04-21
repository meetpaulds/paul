import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DropdownMenu from '../../lib/components/DropdownMenu.svelte'

describe('DropdownMenu', () => {
  it('renders without errors', () => {
    expect(() => render(DropdownMenu)).not.toThrow()
  })
})
