import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUmenu from '../../components/sidebar-menu.vue'

describe('UsidebarUmenu', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUmenu)).not.toThrow()
  })
})
