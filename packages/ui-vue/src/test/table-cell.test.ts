import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtableUcell from '../../components/table-cell.vue'

describe('UtableUcell', () => {
  it('renders without errors', () => {
    expect(() => mount(UtableUcell)).not.toThrow()
  })
})
