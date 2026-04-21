import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUtitle from '../../components/alert-title.vue'

describe('UalertUtitle', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUtitle)).not.toThrow()
  })
})
