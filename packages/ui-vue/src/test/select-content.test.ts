import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UselectUcontent from '../../components/select-content.vue'

describe('UselectUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UselectUcontent)).not.toThrow()
  })
})
