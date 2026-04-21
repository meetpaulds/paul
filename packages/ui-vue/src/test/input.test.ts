import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uinput from '../../components/input.vue'

describe('Uinput', () => {
  it('renders without errors', () => {
    expect(() => mount(Uinput)).not.toThrow()
  })
})
