import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Upagination from '../../components/pagination.vue'

describe('Upagination', () => {
  it('renders without errors', () => {
    expect(() => mount(Upagination)).not.toThrow()
  })
})
