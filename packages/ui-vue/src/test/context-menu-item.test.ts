import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcontextUmenuUitem from '../../components/context-menu-item.vue'

describe('UcontextUmenuUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UcontextUmenuUitem)).not.toThrow()
  })
})
