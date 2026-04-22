import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uaccordion from '../../components/accordion.vue'

describe('Uaccordion', () => {
  it('renders without errors', () => {
    expect(() => mount(Uaccordion)).not.toThrow()
  })
})
