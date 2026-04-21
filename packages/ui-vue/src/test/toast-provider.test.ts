import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoastUprovider from '../../components/toast-provider.vue'

describe('UtoastUprovider', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoastUprovider)).not.toThrow()
  })
})
