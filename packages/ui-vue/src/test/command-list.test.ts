import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcommandUlist from '../../components/command-list.vue'

describe('UcommandUlist', () => {
  it('renders without errors', () => {
    expect(() => mount(UcommandUlist)).not.toThrow()
  })
})
