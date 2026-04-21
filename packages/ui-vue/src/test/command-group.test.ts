import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcommandUgroup from '../../components/command-group.vue'

describe('UcommandUgroup', () => {
  it('renders without errors', () => {
    expect(() => mount(UcommandUgroup)).not.toThrow()
  })
})
