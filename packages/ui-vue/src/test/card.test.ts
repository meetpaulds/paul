import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ucard from '../../components/card.vue'

describe('Ucard', () => {
  it('renders without errors', () => {
    expect(() => mount(Ucard)).not.toThrow()
  })
})
