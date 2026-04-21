import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Udrawer from '../../components/drawer.vue'

describe('Udrawer', () => {
  it('renders without errors', () => {
    expect(() => mount(Udrawer)).not.toThrow()
  })
})
