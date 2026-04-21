import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoastUtitle from '../../components/toast-title.vue'

describe('UtoastUtitle', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoastUtitle)).not.toThrow()
  })
})
