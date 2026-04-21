import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcommandUinput from '../../components/command-input.vue'

describe('UcommandUinput', () => {
  it('renders without errors', () => {
    expect(() => mount(UcommandUinput)).not.toThrow()
  })
})
