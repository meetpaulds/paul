import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Useparator from '../../components/separator.vue'

describe('Useparator', () => {
  it('renders without errors', () => {
    expect(() => mount(Useparator)).not.toThrow()
  })
})
