import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UaccordionUcontent from '../../components/accordion-content.vue'

describe('UaccordionUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UaccordionUcontent)).not.toThrow()
  })
})
