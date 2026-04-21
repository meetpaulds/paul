import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcarouselUcontent from '../../components/carousel-content.vue'

describe('UcarouselUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UcarouselUcontent)).not.toThrow()
  })
})
