import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcarouselUnext from '../../components/carousel-next.vue'

describe('UcarouselUnext', () => {
  it('renders without errors', () => {
    expect(() => mount(UcarouselUnext)).not.toThrow()
  })
})
