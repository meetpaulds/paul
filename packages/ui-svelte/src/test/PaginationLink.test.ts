import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import PaginationLink from '../../lib/components/PaginationLink.svelte'

describe('PaginationLink', () => {
  it('renders without errors', () => {
    expect(() => render(PaginationLink)).not.toThrow()
  })
})
