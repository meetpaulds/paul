import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcontextUmenu from '../../components/context-menu.vue'

describe('UcontextUmenu', () => {
  it('renders without errors', () => {
    expect(() => mount(UcontextUmenu)).not.toThrow()
  })
})
