import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UscrollUarea from '../../components/scroll-area.vue'

describe('UscrollUarea', () => {
  it('renders without errors', () => {
    expect(() => mount(UscrollUarea)).not.toThrow()
  })
})
