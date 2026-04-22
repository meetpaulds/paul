import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcontextUmenuUcontent from '../../components/context-menu-content.vue'

describe('UcontextUmenuUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UcontextUmenuUcontent)).not.toThrow()
  })
})
