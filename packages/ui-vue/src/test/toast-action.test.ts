import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoastUaction from '../../components/toast-action.vue'

describe('UtoastUaction', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoastUaction)).not.toThrow()
  })
})
