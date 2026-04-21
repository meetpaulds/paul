import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UresizableUhandle from '../../components/resizable-handle.vue'

describe('UresizableUhandle', () => {
  it('renders without errors', () => {
    expect(() => mount(UresizableUhandle)).not.toThrow()
  })
})
