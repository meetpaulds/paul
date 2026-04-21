import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdrawerUdescription from '../../components/drawer-description.vue'

describe('UdrawerUdescription', () => {
  it('renders without errors', () => {
    expect(() => mount(UdrawerUdescription)).not.toThrow()
  })
})
