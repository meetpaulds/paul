import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TableCell from '../../lib/components/TableCell.svelte'

describe('TableCell', () => {
  it('renders without errors', () => {
    expect(() => render(TableCell)).not.toThrow()
  })
})
