import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcommandUitem from '../../components/command-item.vue'

describe('UcommandUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UcommandUitem)).not.toThrow()
  })
})
