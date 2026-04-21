import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUmenuUbutton from '../../components/sidebar-menu-button.vue'

describe('UsidebarUmenuUbutton', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUmenuUbutton)).not.toThrow()
  })
})
