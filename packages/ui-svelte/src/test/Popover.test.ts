import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Popover from '../../lib/components/Popover.svelte'

describe('Popover', () => {
  it('renders without errors', () => {
    expect(() => render(Popover)).not.toThrow()
  })
})
