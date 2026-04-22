import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdropdownUmenuUlabel from '../../components/dropdown-menu-label.vue'

describe('UdropdownUmenuUlabel', () => {
  it('renders without errors', () => {
    expect(() => mount(UdropdownUmenuUlabel)).not.toThrow()
  })
})
