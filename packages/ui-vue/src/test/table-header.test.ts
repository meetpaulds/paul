import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtableUheader from '../../components/table-header.vue'

describe('UtableUheader', () => {
  it('renders without errors', () => {
    expect(() => mount(UtableUheader)).not.toThrow()
  })
})
