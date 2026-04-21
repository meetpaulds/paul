import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UmenubarUitem from '../../components/menubar-item.vue'

describe('UmenubarUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UmenubarUitem)).not.toThrow()
  })
})
