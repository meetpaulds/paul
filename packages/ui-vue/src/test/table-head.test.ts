import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtableUhead from '../../components/table-head.vue'

describe('UtableUhead', () => {
  it('renders without errors', () => {
    expect(() => mount(UtableUhead)).not.toThrow()
  })
})
