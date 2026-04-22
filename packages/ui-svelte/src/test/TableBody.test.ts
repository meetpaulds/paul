import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TableBody from '../../lib/components/TableBody.svelte'

describe('TableBody', () => {
  it('renders without errors', () => {
    expect(() => render(TableBody)).not.toThrow()
  })
})
