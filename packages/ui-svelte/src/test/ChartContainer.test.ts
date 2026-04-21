import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ChartContainer from '../../lib/components/ChartContainer.svelte'

describe('ChartContainer', () => {
  it('renders without errors', () => {
    expect(() => render(ChartContainer)).not.toThrow()
  })
})
