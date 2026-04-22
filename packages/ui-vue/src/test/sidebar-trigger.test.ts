import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUtrigger from '../../components/sidebar-trigger.vue'

describe('UsidebarUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUtrigger)).not.toThrow()
  })
})
