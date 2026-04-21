import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import PaginationContent from '../../lib/components/PaginationContent.svelte'

describe('PaginationContent', () => {
  it('renders without errors', () => {
    expect(() => render(PaginationContent)).not.toThrow()
  })
})
