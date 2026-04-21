import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ResizablePanelGroup from '../../lib/components/ResizablePanelGroup.svelte'

describe('ResizablePanelGroup', () => {
  it('renders without errors', () => {
    expect(() => render(ResizablePanelGroup)).not.toThrow()
  })
})
