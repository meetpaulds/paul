import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uslider from '../../components/slider.vue'

describe('Uslider', () => {
  it('renders without errors', () => {
    expect(() => mount(Uslider)).not.toThrow()
  })
})
