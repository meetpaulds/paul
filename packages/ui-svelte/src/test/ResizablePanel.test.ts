import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ResizablePanel from '../../lib/components/ResizablePanel.svelte'

describe('ResizablePanel', () => {
  it('renders without errors', () => {
    expect(() => render(ResizablePanel)).not.toThrow()
  })
})
