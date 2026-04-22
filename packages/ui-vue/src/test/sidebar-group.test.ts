import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUgroup from '../../components/sidebar-group.vue'

describe('UsidebarUgroup', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUgroup)).not.toThrow()
  })
})
