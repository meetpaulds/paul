import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ucarousel from '../../components/carousel.vue'

describe('Ucarousel', () => {
  it('renders without errors', () => {
    expect(() => mount(Ucarousel)).not.toThrow()
  })
})
