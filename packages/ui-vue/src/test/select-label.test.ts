import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UselectUlabel from '../../components/select-label.vue'

describe('UselectUlabel', () => {
  it('renders without errors', () => {
    expect(() => mount(UselectUlabel)).not.toThrow()
  })
})
