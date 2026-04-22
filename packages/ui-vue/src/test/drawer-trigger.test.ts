import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdrawerUtrigger from '../../components/drawer-trigger.vue'

describe('UdrawerUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UdrawerUtrigger)).not.toThrow()
  })
})
