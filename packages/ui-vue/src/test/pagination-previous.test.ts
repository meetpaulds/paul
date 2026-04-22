import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpaginationUprevious from '../../components/pagination-previous.vue'

describe('UpaginationUprevious', () => {
  it('renders without errors', () => {
    expect(() => mount(UpaginationUprevious)).not.toThrow()
  })
})
