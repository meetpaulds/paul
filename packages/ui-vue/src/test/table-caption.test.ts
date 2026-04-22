import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtableUcaption from '../../components/table-caption.vue'

describe('UtableUcaption', () => {
  it('renders without errors', () => {
    expect(() => mount(UtableUcaption)).not.toThrow()
  })
})
