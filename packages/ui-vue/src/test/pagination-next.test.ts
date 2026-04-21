import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpaginationUnext from '../../components/pagination-next.vue'

describe('UpaginationUnext', () => {
  it('renders without errors', () => {
    expect(() => mount(UpaginationUnext)).not.toThrow()
  })
})
