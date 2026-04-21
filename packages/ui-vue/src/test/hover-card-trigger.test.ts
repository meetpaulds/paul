import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UhoverUcardUtrigger from '../../components/hover-card-trigger.vue'

describe('UhoverUcardUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UhoverUcardUtrigger)).not.toThrow()
  })
})
