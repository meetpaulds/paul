import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UmenubarUtrigger from '../../components/menubar-trigger.vue'

describe('UmenubarUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UmenubarUtrigger)).not.toThrow()
  })
})
