import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CommandItem from '../../lib/components/CommandItem.svelte'

describe('CommandItem', () => {
  it('renders without errors', () => {
    expect(() => render(CommandItem)).not.toThrow()
  })
})
