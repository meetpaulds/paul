import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utable from '../../components/table.vue'

describe('Utable', () => {
  it('renders without errors', () => {
    expect(() => mount(Utable)).not.toThrow()
  })
})
