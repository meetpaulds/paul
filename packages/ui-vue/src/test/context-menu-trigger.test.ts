import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcontextUmenuUtrigger from '../../components/context-menu-trigger.vue'

describe('UcontextUmenuUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UcontextUmenuUtrigger)).not.toThrow()
  })
})
