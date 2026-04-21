import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpaginationUcontent from '../../components/pagination-content.vue'

describe('UpaginationUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UpaginationUcontent)).not.toThrow()
  })
})
