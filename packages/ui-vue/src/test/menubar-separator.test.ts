import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UmenubarUseparator from '../../components/menubar-separator.vue'

describe('UmenubarUseparator', () => {
  it('renders without errors', () => {
    expect(() => mount(UmenubarUseparator)).not.toThrow()
  })
})
