import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UresizableUpanel from '../../components/resizable-panel.vue'

describe('UresizableUpanel', () => {
  it('renders without errors', () => {
    expect(() => mount(UresizableUpanel)).not.toThrow()
  })
})
