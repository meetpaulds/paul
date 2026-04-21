import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TableHeader from '../../lib/components/TableHeader.svelte'

describe('TableHeader', () => {
  it('renders without errors', () => {
    expect(() => render(TableHeader)).not.toThrow()
  })
})
