import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUmenuUitem from '../../components/sidebar-menu-item.vue'

describe('UsidebarUmenuUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUmenuUitem)).not.toThrow()
  })
})
