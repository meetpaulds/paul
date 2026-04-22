import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import SidebarMenuButton from '../../lib/components/SidebarMenuButton.svelte'

describe('SidebarMenuButton', () => {
  it('renders without errors', () => {
    expect(() => render(SidebarMenuButton)).not.toThrow()
  })
})
