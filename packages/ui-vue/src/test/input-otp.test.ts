import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UinputUotp from '../../components/input-otp.vue'

describe('UinputUotp', () => {
  it('renders without errors', () => {
    expect(() => mount(UinputUotp)).not.toThrow()
  })
})
