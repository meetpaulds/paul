import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import SidebarHeader from '../../lib/components/SidebarHeader.svelte'

describe('SidebarHeader', () => {
  it('renders without errors', () => {
    expect(() => render(SidebarHeader)).not.toThrow()
  })
})
