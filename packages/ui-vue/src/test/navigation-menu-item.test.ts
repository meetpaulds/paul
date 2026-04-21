import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UnavigationUmenuUitem from '../../components/navigation-menu-item.vue'

describe('UnavigationUmenuUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UnavigationUmenuUitem)).not.toThrow()
  })
})
