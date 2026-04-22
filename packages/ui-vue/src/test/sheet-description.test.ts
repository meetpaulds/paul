import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UsheetUdescription from '../../components/sheet-description.vue'

describe('UsheetUdescription', () => {
  it('renders without errors', () => {
    expect(() => mount(UsheetUdescription)).not.toThrow()
  })
})
