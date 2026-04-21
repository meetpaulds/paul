import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdrawerUcontent from '../../components/drawer-content.vue'

describe('UdrawerUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UdrawerUcontent)).not.toThrow()
  })
})
