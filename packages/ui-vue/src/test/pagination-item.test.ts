import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpaginationUitem from '../../components/pagination-item.vue'

describe('UpaginationUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UpaginationUitem)).not.toThrow()
  })
})
