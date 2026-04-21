import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsheetUtrigger from '../../components/sheet-trigger.vue'

describe('UsheetUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UsheetUtrigger)).not.toThrow()
  })
})
