import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DropdownMenuLabel from '../../lib/components/DropdownMenuLabel.svelte'

describe('DropdownMenuLabel', () => {
  it('renders without errors', () => {
    expect(() => render(DropdownMenuLabel)).not.toThrow()
  })
})
