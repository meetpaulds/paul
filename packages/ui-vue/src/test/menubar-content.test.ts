import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UmenubarUcontent from '../../components/menubar-content.vue'

describe('UmenubarUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UmenubarUcontent)).not.toThrow()
  })
})
