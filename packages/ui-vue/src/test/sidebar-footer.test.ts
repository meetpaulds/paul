import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUfooter from '../../components/sidebar-footer.vue'

describe('UsidebarUfooter', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUfooter)).not.toThrow()
  })
})
