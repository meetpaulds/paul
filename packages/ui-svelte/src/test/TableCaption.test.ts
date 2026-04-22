import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TableCaption from '../../lib/components/TableCaption.svelte'

describe('TableCaption', () => {
  it('renders without errors', () => {
    expect(() => render(TableCaption)).not.toThrow()
  })
})
