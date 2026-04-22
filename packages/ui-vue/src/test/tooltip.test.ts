import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utooltip from '../../components/tooltip.vue'

describe('Utooltip', () => {
  it('renders without errors', () => {
    expect(() => mount(Utooltip)).not.toThrow()
  })
})
