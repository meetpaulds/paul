import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsheetUfooter from '../../components/sheet-footer.vue'

describe('UsheetUfooter', () => {
  it('renders without errors', () => {
    expect(() => mount(UsheetUfooter)).not.toThrow()
  })
})
