import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ulabel from '../../components/label.vue'

describe('Ulabel', () => {
  it('renders without errors', () => {
    expect(() => mount(Ulabel)).not.toThrow()
  })
})
