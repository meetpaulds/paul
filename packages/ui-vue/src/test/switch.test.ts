import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uswitch from '../../components/switch.vue'

describe('Uswitch', () => {
  it('renders without errors', () => {
    expect(() => mount(Uswitch)).not.toThrow()
  })
})
