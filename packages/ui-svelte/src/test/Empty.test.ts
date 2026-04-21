import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Empty from '../../lib/components/Empty.svelte'

describe('Empty', () => {
  it('renders without errors', () => {
    expect(() => render(Empty)).not.toThrow()
  })
})
