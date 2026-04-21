import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utoggle from '../../components/toggle.vue'

describe('Utoggle', () => {
  it('renders without errors', () => {
    expect(() => mount(Utoggle)).not.toThrow()
  })
})
