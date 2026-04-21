import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Pagination from '../../lib/components/Pagination.svelte'

describe('Pagination', () => {
  it('renders without errors', () => {
    expect(() => render(Pagination)).not.toThrow()
  })
})
