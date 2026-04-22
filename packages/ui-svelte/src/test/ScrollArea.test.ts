import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ScrollArea from '../../lib/components/ScrollArea.svelte'

describe('ScrollArea', () => {
  it('renders without errors', () => {
    expect(() => render(ScrollArea)).not.toThrow()
  })
})
