import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import PaginationNext from '../../lib/components/PaginationNext.svelte'

describe('PaginationNext', () => {
  it('renders without errors', () => {
    expect(() => render(PaginationNext)).not.toThrow()
  })
})
