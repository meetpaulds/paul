import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UnavigationUmenuUtrigger from '../../components/navigation-menu-trigger.vue'

describe('UnavigationUmenuUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UnavigationUmenuUtrigger)).not.toThrow()
  })
})
