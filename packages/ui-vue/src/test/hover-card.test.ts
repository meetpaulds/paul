import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UhoverUcard from '../../components/hover-card.vue'

describe('UhoverUcard', () => {
  it('renders without errors', () => {
    expect(() => mount(UhoverUcard)).not.toThrow()
  })
})
