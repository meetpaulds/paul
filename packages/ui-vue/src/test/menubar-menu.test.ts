import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UmenubarUmenu from '../../components/menubar-menu.vue'

describe('UmenubarUmenu', () => {
  it('renders without errors', () => {
    expect(() => mount(UmenubarUmenu)).not.toThrow()
  })
})
