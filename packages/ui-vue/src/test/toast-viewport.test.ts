import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoastUviewport from '../../components/toast-viewport.vue'

describe('UtoastUviewport', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoastUviewport)).not.toThrow()
  })
})
