import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import PaginationEllipsis from '../../lib/components/PaginationEllipsis.svelte'

describe('PaginationEllipsis', () => {
  it('renders without errors', () => {
    expect(() => render(PaginationEllipsis)).not.toThrow()
  })
})
