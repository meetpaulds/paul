import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpaginationUellipsis from '../../components/pagination-ellipsis.vue'

describe('UpaginationUellipsis', () => {
  it('renders without errors', () => {
    expect(() => mount(UpaginationUellipsis)).not.toThrow()
  })
})
