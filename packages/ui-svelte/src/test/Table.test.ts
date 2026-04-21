import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Table from '../../lib/components/Table.svelte'

describe('Table', () => {
  it('renders without errors', () => {
    expect(() => render(Table)).not.toThrow()
  })
})
