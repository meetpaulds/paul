import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UnavigationUmenuUcontent from '../../components/navigation-menu-content.vue'

describe('UnavigationUmenuUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UnavigationUmenuUcontent)).not.toThrow()
  })
})
