import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Sheet from '../../lib/components/Sheet.svelte'

describe('Sheet', () => {
  it('renders without errors', () => {
    expect(() => render(Sheet)).not.toThrow()
  })
})
