import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import PaginationPrevious from '../../lib/components/PaginationPrevious.svelte'

describe('PaginationPrevious', () => {
  it('renders without errors', () => {
    expect(() => render(PaginationPrevious)).not.toThrow()
  })
})
