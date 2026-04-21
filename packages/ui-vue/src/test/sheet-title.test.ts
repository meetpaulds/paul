import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsheetUtitle from '../../components/sheet-title.vue'

describe('UsheetUtitle', () => {
  it('renders without errors', () => {
    expect(() => mount(UsheetUtitle)).not.toThrow()
  })
})
