import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TableRow from '../../lib/components/TableRow.svelte'

describe('TableRow', () => {
  it('renders without errors', () => {
    expect(() => render(TableRow)).not.toThrow()
  })
})
