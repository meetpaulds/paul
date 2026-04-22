import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcarouselUitem from '../../components/carousel-item.vue'

describe('UcarouselUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UcarouselUitem)).not.toThrow()
  })
})
