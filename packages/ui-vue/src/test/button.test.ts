import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ubutton from '../../components/button.vue'

describe('Ubutton', () => {
  it('renders without errors', () => {
    expect(() => mount(Ubutton)).not.toThrow()
  })
})
