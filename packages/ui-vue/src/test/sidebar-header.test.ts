import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUheader from '../../components/sidebar-header.vue'

describe('UsidebarUheader', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUheader)).not.toThrow()
  })
})
