import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdataUtable from '../../components/data-table.vue'

describe('UdataUtable', () => {
  it('renders without errors', () => {
    expect(() => mount(UdataUtable)).not.toThrow()
  })
})
