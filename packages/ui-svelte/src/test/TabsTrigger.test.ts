import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TabsTrigger from '../../lib/components/TabsTrigger.svelte'

describe('TabsTrigger', () => {
  it('renders without errors', () => {
    expect(() => render(TabsTrigger)).not.toThrow()
  })
})
