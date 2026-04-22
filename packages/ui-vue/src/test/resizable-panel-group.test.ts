import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UresizableUpanelUgroup from '../../components/resizable-panel-group.vue'

describe('UresizableUpanelUgroup', () => {
  it('renders without errors', () => {
    expect(() => mount(UresizableUpanelUgroup)).not.toThrow()
  })
})
