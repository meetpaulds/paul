import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import PaginationItem from '../../lib/components/PaginationItem.svelte'

describe('PaginationItem', () => {
  it('renders without errors', () => {
    expect(() => render(PaginationItem)).not.toThrow()
  })
})
