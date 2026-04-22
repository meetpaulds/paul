import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import SidebarMenuItem from '../../lib/components/SidebarMenuItem.svelte'

describe('SidebarMenuItem', () => {
  it('renders without errors', () => {
    expect(() => render(SidebarMenuItem)).not.toThrow()
  })
})
