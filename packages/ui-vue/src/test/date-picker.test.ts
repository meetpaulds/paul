import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdateUpicker from '../../components/date-picker.vue'

describe('UdateUpicker', () => {
  it('renders without errors', () => {
    expect(() => mount(UdateUpicker)).not.toThrow()
  })
})
