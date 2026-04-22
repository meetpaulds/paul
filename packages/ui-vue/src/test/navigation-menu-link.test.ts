import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UnavigationUmenuUlink from '../../components/navigation-menu-link.vue'

describe('UnavigationUmenuUlink', () => {
  it('renders without errors', () => {
    expect(() => mount(UnavigationUmenuUlink)).not.toThrow()
  })
})
