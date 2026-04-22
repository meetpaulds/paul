import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import SidebarMenu from '../../lib/components/SidebarMenu.svelte'

describe('SidebarMenu', () => {
  it('renders without errors', () => {
    expect(() => render(SidebarMenu)).not.toThrow()
  })
})
