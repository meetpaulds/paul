import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UaccordionUitem from '../../components/accordion-item.vue'

describe('UaccordionUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UaccordionUitem)).not.toThrow()
  })
})
