import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdropdownUmenuUitem from '../../components/dropdown-menu-item.vue'

describe('UdropdownUmenuUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UdropdownUmenuUitem)).not.toThrow()
  })
})
