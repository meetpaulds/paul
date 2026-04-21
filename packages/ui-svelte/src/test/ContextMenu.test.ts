import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ContextMenu from '../../lib/components/ContextMenu.svelte'

describe('ContextMenu', () => {
  it('renders without errors', () => {
    expect(() => render(ContextMenu)).not.toThrow()
  })
})
