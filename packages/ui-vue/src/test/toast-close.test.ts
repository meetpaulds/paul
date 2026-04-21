import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoastUclose from '../../components/toast-close.vue'

describe('UtoastUclose', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoastUclose)).not.toThrow()
  })
})
