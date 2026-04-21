import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uempty from '../../components/empty.vue'

describe('Uempty', () => {
  it('renders without errors', () => {
    expect(() => mount(Uempty)).not.toThrow()
  })
})
