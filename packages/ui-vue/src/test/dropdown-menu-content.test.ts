import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdropdownUmenuUcontent from '../../components/dropdown-menu-content.vue'

describe('UdropdownUmenuUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UdropdownUmenuUcontent)).not.toThrow()
  })
})
