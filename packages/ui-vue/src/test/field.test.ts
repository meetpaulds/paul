import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ufield from '../../components/field.vue'

describe('Ufield', () => {
  it('renders without errors', () => {
    expect(() => mount(Ufield)).not.toThrow()
  })
})
