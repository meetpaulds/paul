import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UselectUitem from '../../components/select-item.vue'

describe('UselectUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UselectUitem)).not.toThrow()
  })
})
