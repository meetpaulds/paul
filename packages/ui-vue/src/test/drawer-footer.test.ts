import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdrawerUfooter from '../../components/drawer-footer.vue'

describe('UdrawerUfooter', () => {
  it('renders without errors', () => {
    expect(() => mount(UdrawerUfooter)).not.toThrow()
  })
})
