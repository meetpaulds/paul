import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdropdownUmenu from '../../components/dropdown-menu.vue'

describe('UdropdownUmenu', () => {
  it('renders without errors', () => {
    expect(() => mount(UdropdownUmenu)).not.toThrow()
  })
})
