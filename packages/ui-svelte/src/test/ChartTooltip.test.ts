import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ChartTooltip from '../../lib/components/ChartTooltip.svelte'

describe('ChartTooltip', () => {
  it('renders without errors', () => {
    expect(() => render(ChartTooltip)).not.toThrow()
  })
})
