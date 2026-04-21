import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdropdownUmenuUseparator from '../../components/dropdown-menu-separator.vue'

describe('UdropdownUmenuUseparator', () => {
  it('renders without errors', () => {
    expect(() => mount(UdropdownUmenuUseparator)).not.toThrow()
  })
})
