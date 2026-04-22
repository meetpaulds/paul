import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UradioUgroupUitem from '../../components/radio-group-item.vue'

describe('UradioUgroupUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UradioUgroupUitem)).not.toThrow()
  })
})
