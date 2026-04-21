import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoggleUgroupUitem from '../../components/toggle-group-item.vue'

describe('UtoggleUgroupUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoggleUgroupUitem)).not.toThrow()
  })
})
