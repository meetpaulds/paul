import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpaginationUlink from '../../components/pagination-link.vue'

describe('UpaginationUlink', () => {
  it('renders without errors', () => {
    expect(() => mount(UpaginationUlink)).not.toThrow()
  })
})
