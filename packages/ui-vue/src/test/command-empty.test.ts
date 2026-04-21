import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcommandUempty from '../../components/command-empty.vue'

describe('UcommandUempty', () => {
  it('renders without errors', () => {
    expect(() => mount(UcommandUempty)).not.toThrow()
  })
})
