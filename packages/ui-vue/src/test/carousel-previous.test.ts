import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcarouselUprevious from '../../components/carousel-previous.vue'

describe('UcarouselUprevious', () => {
  it('renders without errors', () => {
    expect(() => mount(UcarouselUprevious)).not.toThrow()
  })
})
