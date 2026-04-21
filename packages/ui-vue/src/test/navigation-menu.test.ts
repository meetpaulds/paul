import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UnavigationUmenu from '../../components/navigation-menu.vue'

describe('UnavigationUmenu', () => {
  it('renders without errors', () => {
    expect(() => mount(UnavigationUmenu)).not.toThrow()
  })
})
