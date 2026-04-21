import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TableHead from '../../lib/components/TableHead.svelte'

describe('TableHead', () => {
  it('renders without errors', () => {
    expect(() => render(TableHead)).not.toThrow()
  })
})
