import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsheetUheader from '../../components/sheet-header.vue'

describe('UsheetUheader', () => {
  it('renders without errors', () => {
    expect(() => mount(UsheetUheader)).not.toThrow()
  })
})
