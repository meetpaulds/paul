import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtableUrow from '../../components/table-row.vue'

describe('UtableUrow', () => {
  it('renders without errors', () => {
    expect(() => mount(UtableUrow)).not.toThrow()
  })
})
