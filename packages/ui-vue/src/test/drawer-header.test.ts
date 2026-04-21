import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdrawerUheader from '../../components/drawer-header.vue'

describe('UdrawerUheader', () => {
  it('renders without errors', () => {
    expect(() => mount(UdrawerUheader)).not.toThrow()
  })
})
