import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CollapsibleTrigger from '../../lib/components/CollapsibleTrigger.svelte'

describe('CollapsibleTrigger', () => {
  it('renders without errors', () => {
    expect(() => render(CollapsibleTrigger)).not.toThrow()
  })
})
