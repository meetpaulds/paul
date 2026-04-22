import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Tooltip from '../../lib/components/Tooltip.svelte'

describe('Tooltip', () => {
  it('renders without errors', () => {
    expect(() => render(Tooltip)).not.toThrow()
  })
})
