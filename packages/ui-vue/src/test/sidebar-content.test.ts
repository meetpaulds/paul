import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUcontent from '../../components/sidebar-content.vue'

describe('UsidebarUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUcontent)).not.toThrow()
  })
})
