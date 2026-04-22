import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UaccordionUtrigger from '../../components/accordion-trigger.vue'

describe('UaccordionUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UaccordionUtrigger)).not.toThrow()
  })
})
