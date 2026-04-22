import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsheetUcontent from '../../components/sheet-content.vue'

describe('UsheetUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UsheetUcontent)).not.toThrow()
  })
})
