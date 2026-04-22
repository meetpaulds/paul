import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsidebarUprovider from '../../components/sidebar-provider.vue'

describe('UsidebarUprovider', () => {
  it('renders without errors', () => {
    expect(() => mount(UsidebarUprovider)).not.toThrow()
  })
})
