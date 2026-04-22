import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import SidebarContent from '../../lib/components/SidebarContent.svelte'

describe('SidebarContent', () => {
  it('renders without errors', () => {
    expect(() => render(SidebarContent)).not.toThrow()
  })
})
