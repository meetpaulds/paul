import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CommandSeparator from '../../lib/components/CommandSeparator.svelte'

describe('CommandSeparator', () => {
  it('renders without errors', () => {
    expect(() => render(CommandSeparator)).not.toThrow()
  })
})
