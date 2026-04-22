import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UinputUgroupUtext from '../../components/input-group-text.vue'

describe('UinputUgroupUtext', () => {
  it('renders without errors', () => {
    expect(() => mount(UinputUgroupUtext)).not.toThrow()
  })
})
