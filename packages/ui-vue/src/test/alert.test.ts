import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ualert from '../../components/alert.vue'

describe('Ualert', () => {
  it('renders without errors', () => {
    expect(() => mount(Ualert)).not.toThrow()
  })
})
