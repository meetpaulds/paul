import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdropdownUmenuUtrigger from '../../components/dropdown-menu-trigger.vue'

describe('UdropdownUmenuUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UdropdownUmenuUtrigger)).not.toThrow()
  })
})
