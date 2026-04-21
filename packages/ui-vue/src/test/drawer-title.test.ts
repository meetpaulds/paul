import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdrawerUtitle from '../../components/drawer-title.vue'

describe('UdrawerUtitle', () => {
  it('renders without errors', () => {
    expect(() => mount(UdrawerUtitle)).not.toThrow()
  })
})
