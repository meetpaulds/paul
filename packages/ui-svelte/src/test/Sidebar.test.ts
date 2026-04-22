import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Sidebar from '../../lib/components/Sidebar.svelte'

describe('Sidebar', () => {
  it('renders without errors', () => {
    expect(() => render(Sidebar)).not.toThrow()
  })
})
