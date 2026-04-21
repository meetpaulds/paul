import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TableFooter from '../../lib/components/TableFooter.svelte'

describe('TableFooter', () => {
  it('renders without errors', () => {
    expect(() => render(TableFooter)).not.toThrow()
  })
})
