import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ukbd from '../../components/kbd.vue'

describe('Ukbd', () => {
  it('renders without errors', () => {
    expect(() => mount(Ukbd)).not.toThrow()
  })
})
