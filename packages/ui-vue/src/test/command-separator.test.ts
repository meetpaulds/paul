import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcommandUseparator from '../../components/command-separator.vue'

describe('UcommandUseparator', () => {
  it('renders without errors', () => {
    expect(() => mount(UcommandUseparator)).not.toThrow()
  })
})
