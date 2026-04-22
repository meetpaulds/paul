import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Collapsible from '../../lib/components/Collapsible.svelte'

describe('Collapsible', () => {
  it('renders without errors', () => {
    expect(() => render(Collapsible)).not.toThrow()
  })
})
