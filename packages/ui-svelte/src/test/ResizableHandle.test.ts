import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ResizableHandle from '../../lib/components/ResizableHandle.svelte'

describe('ResizableHandle', () => {
  it('renders without errors', () => {
    expect(() => render(ResizableHandle)).not.toThrow()
  })
})
