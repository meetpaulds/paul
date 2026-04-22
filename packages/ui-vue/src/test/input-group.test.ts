import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UinputUgroup from '../../components/input-group.vue'

describe('UinputUgroup', () => {
  it('renders without errors', () => {
    expect(() => mount(UinputUgroup)).not.toThrow()
  })
})
