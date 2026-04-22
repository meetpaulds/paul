import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UnavigationUmenuUlist from '../../components/navigation-menu-list.vue'

describe('UnavigationUmenuUlist', () => {
  it('renders without errors', () => {
    expect(() => mount(UnavigationUmenuUlist)).not.toThrow()
  })
})
