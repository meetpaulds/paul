import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CommandGroup from '../../lib/components/CommandGroup.svelte'

describe('CommandGroup', () => {
  it('renders without errors', () => {
    expect(() => render(CommandGroup)).not.toThrow()
  })
})
