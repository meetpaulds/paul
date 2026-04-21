import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsheetUclose from '../../components/sheet-close.vue'

describe('UsheetUclose', () => {
  it('renders without errors', () => {
    expect(() => mount(UsheetUclose)).not.toThrow()
  })
})
